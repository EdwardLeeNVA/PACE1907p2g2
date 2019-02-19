import { Component, OnInit } from '@angular/core';
import {Character} from '../../models/character';
import {User} from "../../models/user";
import {LoginService} from "../../services/login-service.service";
import {Router} from "@angular/router";
import {CharacterService} from "../../services/character.service";
import {HttpDdService} from "../../services/http-dd.service";

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  constructor(private login: LoginService, private router: Router, private cc: CharacterService, private http: HttpDdService) { }

  public activeSession: boolean;
  public currentUser: User;

  ngOnInit() {
    this.login.currentLoginStatus.subscribe(status => this.activeSession = status);
    this.login.currentLoginUser.subscribe(user => this.currentUser = user);
    if(!this.activeSession){
      this.router.navigate(['/']);
    } else {
      this.generateCharacter();
    }
  }

  character: Character = {
    id: 0,
    playerId: 0,
    name: 'Default',
    race: 'Dwarf',
    dndClass: 'Lumberjack',
    proficiencies: [],
    alignment: ''
  };

  characterSaved: boolean = false;
  failedCharacterSave: boolean = false;

  alignments: string[] = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];

  public raceURL: string = "/DnDGenerator/Generator/Races";
  public classURL: string = "/DnDGenerator/Generator/Classes";
  public servName: string = "/DnDGenerator/Generator/Name";

  generateCharacter(){
    this.characterSaved = false;
    this.failedCharacterSave = false;
    this.getClass();
    this.getRandomName();
    this.getRace();
    this.character.alignment = this.alignments[Math.floor(Math.random() * this.alignments.length)];
  }

  saveCharacter(){
    this.characterSaved = false;
    this.failedCharacterSave = false;
    this.http.saveCharacter(this.character).subscribe(
      bool => this.verifySaveCharacter(bool),
      error => console.error("Failed to send Save Request"),
      () => console.log("Register User call completed.")
    );
  }

  verifySaveCharacter(bool: boolean){
    if(bool){
      this.characterSaved = true;
    } else {
      this.failedCharacterSave = true;
    }
  }

  getClass(){
    const getClass = new XMLHttpRequest();
    getClass.onreadystatechange = () => {
      if((getClass.readyState == 4) && (getClass.status == 200)){
        const resp = JSON.parse(getClass.responseText);
        const index = Math.floor(Math.random() * resp.results.length);
        this.character.dndClass = resp.results[index].name;
        this.getClassInfo(this.character.dndClass);
      }
    };
    getClass.open("get", this.classURL);
    getClass.send();
  }

  getClassInfo(c: string){
    const newURL = this.classURL + '/' + c;
    const getClassInfo = new XMLHttpRequest();
    getClassInfo.onreadystatechange = () => {
        if((getClassInfo.readyState == 4) && (getClassInfo.status == 200)){
        const resp = JSON.parse(getClassInfo.responseText);
        if(c == 'Bard') this.character.proficiencies = this.getProficiencyBard(resp);
        else if(c == 'Monk') this.character.proficiencies = this.getProficiencyMonk(resp);
        else{
          this.character.proficiencies = this.getProficiencyGeneral(resp);
        }
        this.getDisplayProficiencies();
      }
    };
    getClassInfo.open("get", newURL);
    getClassInfo.send();
  }

  getRandomSelections(size: number, range: number): number[]{
    let returnArray: number[] = [];
    returnArray.push(Math.floor(Math.random() * range));
    while(returnArray.length < size){
      let potentialValue: number = Math.floor(Math.random() * range);
      let addToArray: boolean = true;
      for(let x = 0; x < returnArray.length; x++){
        if(returnArray[x] == potentialValue){
          addToArray = false;
          break;
        }
      }
      if(addToArray) returnArray.push(potentialValue);
    }
    return returnArray;
  }


  getRandomName(){
    const getRandomName = new XMLHttpRequest();
    getRandomName.onreadystatechange = () => {
      console.log("Ready State for name " + getRandomName.readyState);
      if((getRandomName.readyState == 4) && (getRandomName.status == 200)){
        console.log("Name response: " + getRandomName.responseText);
        const resp = JSON.parse(getRandomName.responseText);
        console.log("Name received: " + resp.results[0].name.first);
        this.character.name = resp.results[0].name.first;
      }
    };
    getRandomName.open("get", this.servName);
    getRandomName.send();
  }

  getRace(){
    const getRace = new XMLHttpRequest();
    getRace.onreadystatechange = () => {
      if((getRace.readyState == 4) && (getRace.status == 200)){
        const resp = JSON.parse(getRace.responseText);
        const index = Math.floor(Math.random() * resp.results.length);
        this.character.race = resp.results[index].name;
      }
    };
    getRace.open("get", this.raceURL);
    getRace.send();
  }

  getProficiencyGeneral(resp){
    let returnArray: string[] = [];
    switch(resp.proficiency_choices[0].choose){
      case 1:
        returnArray.push(resp.proficiency_choices[0].from[Math.floor(Math.random() * resp.proficiency_choices[0].choose)].name);
        break;
      case 2:
        const case2Selections = this.getRandomSelections(resp.proficiency_choices[0].choose, resp.proficiency_choices[0].from.length);
        returnArray.push(resp.proficiency_choices[0].from[case2Selections[0]].name);
        returnArray.push(resp.proficiency_choices[0].from[case2Selections[1]].name);
        break;
      case 3:
        const case3Selections = this.getRandomSelections(resp.proficiency_choices[0].choose, resp.proficiency_choices[0].from.length);
        returnArray.push(resp.proficiency_choices[0].from[case3Selections[0]].name);
        returnArray.push(resp.proficiency_choices[0].from[case3Selections[1]].name);
        returnArray.push(resp.proficiency_choices[0].from[case3Selections[2]].name);
        break;
      default:
        const case4Selections = this.getRandomSelections(resp.proficiency_choices[0].choose, resp.proficiency_choices[0].from.length);
        returnArray.push(resp.proficiency_choices[0].from[case4Selections[0]].name);
        returnArray.push(resp.proficiency_choices[0].from[case4Selections[1]].name);
        returnArray.push(resp.proficiency_choices[0].from[case4Selections[2]].name);
        returnArray.push(resp.proficiency_choices[0].from[case4Selections[3]].name);
        break;
    }
    return returnArray;
  }

  getProficiencyMonk(resp){
    let returnArray: string[] = [];
    const case2Selections = this.getRandomSelections(resp.proficiency_choices[2].choose, resp.proficiency_choices[2].from.length);
    returnArray.push(resp.proficiency_choices[2].from[case2Selections[0]].name);
    returnArray.push(resp.proficiency_choices[2].from[case2Selections[1]].name);
    return returnArray;
  }

  getProficiencyBard(resp){
    let returnArray: string[] = [];
    const case2Selections = this.getRandomSelections(resp.proficiency_choices[0].choose, resp.proficiency_choices[0].from.length);
    returnArray.push(resp.proficiency_choices[0].from[case2Selections[0]].name);
    returnArray.push(resp.proficiency_choices[0].from[case2Selections[1]].name);
    returnArray.push(resp.proficiency_choices[0].from[case2Selections[2]].name);
    return returnArray;
  }

  getDisplayProficiencies(){
    let count: number = 0;
    while(count < this.character.proficiencies.length){
      this.character.proficiencies[count] = this.character.proficiencies[count].substring(7);
      count++;
    }
  }

  testName: string = 'pre-init';
  getTestName(){
    this.testName = this.http.fetchRandomName()[0];
  }
}
