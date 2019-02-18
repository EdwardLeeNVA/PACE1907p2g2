import { Component, OnInit } from '@angular/core';
import {Character} from '../../models/character';
import {User} from "../../models/user";
import {LoginService} from "../../services/login-service.service";
import {Router} from "@angular/router";
import {CharacterService} from "../../services/character.service";

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  constructor(private login: LoginService, private router: Router, private cc: CharacterService) { }

  public activeSession: boolean;
  public currentUser: User;

  ngOnInit() {
    this.login.currentLoginStatus.subscribe(status => this.activeSession = status);
    this.login.currentLoginUser.subscribe(user => this.currentUser = user);
    if(!this.activeSession){
      this.router.navigate(['/']);
    }
    this.generateCharacter();
  }

  character: Character = {
    id: 0,
    playerId: 0,
    name: 'Default',
    race: 'Dwarf',
    dndClass: 'Lumberjack',
    prof1: '',
    prof2: '',
    prof3: '',
    prof4: '',
  };

  displayProficiencies: string[];
  proficiencies: string[];
  subclasses: string[];
  hitDie: number;

  public raceURL: string = "http://dnd5eapi.co/api/races/";
  public classURL: string = "/DnDGenerator/Generator/Classes";
  public nameURL: string = "https://api.namefake.com/";
  public servName: string = "/DnDGenerator/Generator/Name";

  generateCharacter(){
    console.log("Generate Character called.");
    this.getClass();
    this.getRandomName();
    this.getRace();
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
      console.log("Sent request for class info to " + newURL);
      if((getClassInfo.readyState == 4) && (getClassInfo.status == 200)){
        const resp = JSON.parse(getClassInfo.responseText);
        if(c == 'Bard') this.getProficiencyBard(resp);
        else if(c == 'Monk') this.getProficiencyMonk(resp);
        else{
          switch(resp.proficiency_choices[0].choose){
            case 1:
              this.character.prof1 = resp.proficiency_choices[0].from[Math.floor(Math.random() * resp.proficiency_choices[0].choose)].name;
              break;
            case 2:
              const case2Selections = this.getRandomSelections(resp.proficiency_choices[0].choose, resp.proficiency_choices[0].from.length);
              this.character.prof1 = resp.proficiency_choices[0].from[case2Selections[0]].name;
              this.character.prof1 = resp.proficiency_choices[0].from[case2Selections[1]].name;
              break;
            case 3:
              const case3Selections = this.getRandomSelections(resp.proficiency_choices[0].choose, resp.proficiency_choices[0].from.length);
              this.character.prof1 = resp.proficiency_choices[0].from[case3Selections[0]].name;
              this.character.prof1 = resp.proficiency_choices[0].from[case3Selections[1]].name;
              this.character.prof1 = resp.proficiency_choices[0].from[case3Selections[2]].name;
              break;
            default:
              const case4Selections = this.getRandomSelections(resp.proficiency_choices[0].choose, resp.proficiency_choices[0].from.length);
              this.character.prof1 = resp.proficiency_choices[0].from[case4Selections[0]].name;
              this.character.prof2 = resp.proficiency_choices[0].from[case4Selections[1]].name;
              this.character.prof3 = resp.proficiency_choices[0].from[case4Selections[2]].name;
              this.character.prof4 = resp.proficiency_choices[0].from[case4Selections[3]].name;
              break;
          }
        }
        this.proficiencies = resp.proficiencies;
        this.subclasses = resp.subclasses;
        this.hitDie = resp.hit_die;
        this.getDisplayProficiencies();
      }
    }
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
      console.log("Ready State " + getRandomName.readyState);
      if((getRandomName.readyState == 4) && (getRandomName.status == 200)){
        const resp = JSON.parse(getRandomName.responseText);
        this.character.name = resp.results.name.first;
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
        const index = Math.floor(Math.random() * resp.length);
        this.character.race = resp[index].name;
      }
    };
    getRace.open("get", this.raceURL);
    getRace.send();
  }

  getProficiencyMonk(resp){
    const case2Selections = this.getRandomSelections(resp.proficiency_choices[2].choose, resp.proficiency_choices[2].from.length);
    this.character.prof1 = resp.proficiency_choices[2].from[case2Selections[0]].name;
    this.character.prof2 = resp.proficiency_choices[2].from[case2Selections[1]].name;
  }

  getProficiencyBard(resp){
    const case2Selections = this.getRandomSelections(resp.proficiency_choices[0].choose, resp.proficiency_choices[0].from.length);
    this.character.prof1 = resp.proficiency_choices[0].from[case2Selections[0]].name;
    this.character.prof2 = resp.proficiency_choices[0].from[case2Selections[1]].name;
    this.character.prof3 = resp.proficiency_choices[0].from[case2Selections[2]].name;
  }

  getDisplayProficiencies(){
    this.displayProficiencies = [];
    if(this.character.prof1 != null || this.character.prof1 != ''){
      this.displayProficiencies.push(this.character.prof1);
    }
    if(this.character.prof2 != null || this.character.prof2 != ''){
      this.displayProficiencies.push(this.character.prof2);
    }
    if(this.character.prof3 != null || this.character.prof3 != ''){
      this.displayProficiencies.push(this.character.prof3);
    }
    if(this.character.prof4 != null || this.character.prof4 != ''){
      this.displayProficiencies.push(this.character.prof4);
    }
  }
}
