import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import * as randomName from "node-random-name";
import {Character} from "../models/character";
import {AppService} from "./app-service.service";
import {HttpDdService} from "./http-dd.service";
import {User} from "../models/user";
//import random from "random-name";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpDdService, private app: AppService) { }

  public characterQueue: Character[] = [];
  public characterRaceQueue: string[] = [];
  public characterNameQueue: string[] = [];
  public characterClassQueue: string[] = [];

  readonly QUEUE_SIZE: number = 10;
  readonly MINIMUM_SIZE: number = 2;

  alignments: string[] = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];

  initCharacterQueue(){
    this.loadNameQueue()
  }

  loadNameQueue(){
    while(this.characterNameQueue.length < this.QUEUE_SIZE){
      let potentialName: string = this.generateRandomName();
      if(this.characterNameQueue.indexOf(potentialName) < 0){
        this.characterNameQueue.push(this.generateRandomName());
      }
    }
    this.loadRaceQueue();
  }

  generateRandomName(): string{
    //return random.first();
    return randomName({ first: true });
  }

  loadRaceQueue(){
    if(this.characterRaceQueue.length < this.QUEUE_SIZE){
      this.http.getRace().subscribe(
        resp => this.addRaceToQueue(resp),
        error => console.log("Failed to retrieve race."),
        () => console.log("Race retrieved successfully.")
      );
    } else {
      this.loadClassQueue();
    }
  }

  addRaceToQueue(resp: any){
    while(this.characterRaceQueue.length < this.QUEUE_SIZE){
      this.characterRaceQueue.push(resp.results[Math.floor(Math.random() * resp.results.length)].name);
    }
    this.loadClassQueue();
  }

  loadClassQueue(){
    if(this.characterClassQueue.length < this.QUEUE_SIZE){
      this.http.getClass().subscribe(
        resp => this.addClassToQueue(resp),
        error => console.log("Failed to get classes."),
        () => console.log("Fetched Class list successfully.")
      );
    } else {
      this.loadClassDetails(this.characterClassQueue.shift());
    }
  }

  addClassToQueue(resp: any){
    while(this.characterClassQueue.length < this.QUEUE_SIZE){
      this.characterClassQueue.push(resp.results[Math.floor(Math.random() * resp.results.length)].name)
    }
    this.loadClassDetails(this.characterClassQueue.shift());
  }

  loadClassDetails(dndClass: string){
    if(this.characterQueue.length < this.QUEUE_SIZE){
      this.http.getClassInfo(dndClass).subscribe(
        resp => this.formCharacterForQueue(resp),
        error => console.log("Request for specific class details failed."),
        () => console.log("Class details received successfully.")
      );
    }
  }

  formCharacterForQueue(resp: any){
    let newCharacter: Character = new Character();
    newCharacter.name = this.getName();
    newCharacter.alignment = this.alignments[Math.floor(Math.random() * this.alignments.length)];
    newCharacter.race = this.getRace();
    newCharacter.dndClass = resp.name;
    switch(newCharacter.dndClass){
      case 'Bard':
        newCharacter.proficiencies = this.getProficiencyBard(resp);
        break;
      case 'Monk':
        newCharacter.proficiencies = this.getProficiencyMonk(resp);
        break;
      default:
        newCharacter.proficiencies = this.getProficiencyGeneral(resp);
        break;
    }
    newCharacter.proficiencies = this.getDisplayProficiencies(newCharacter.proficiencies);
    this.characterQueue.push(newCharacter);
    if(this.characterClassQueue.length <= this.MINIMUM_SIZE || this.characterRaceQueue.length <= this.MINIMUM_SIZE ||
    this.characterNameQueue.length <= this.MINIMUM_SIZE || this.characterQueue.length <= this.MINIMUM_SIZE){
      this.loadNameQueue()
    }
  }

  getName(){
    if(this.characterNameQueue.length <= this.MINIMUM_SIZE){
      this.loadNameQueue();
    }
    return this.characterNameQueue.shift();
  }

  getRace(){
    if(this.characterRaceQueue.length <= this.MINIMUM_SIZE){
      this.loadRaceQueue();
    }
    return this.characterRaceQueue.shift();
  }

  getProficiencyGeneral(resp: any){
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

  getProficiencyMonk(resp: any){
    let returnArray: string[] = [];
    const case2Selections = this.getRandomSelections(resp.proficiency_choices[2].choose, resp.proficiency_choices[2].from.length);
    returnArray.push(resp.proficiency_choices[2].from[case2Selections[0]].name);
    returnArray.push(resp.proficiency_choices[2].from[case2Selections[1]].name);
    return returnArray;
  }

  getProficiencyBard(resp: any){
    let returnArray: string[] = [];
    const case2Selections = this.getRandomSelections(resp.proficiency_choices[0].choose, resp.proficiency_choices[0].from.length);
    returnArray.push(resp.proficiency_choices[0].from[case2Selections[0]].name);
    returnArray.push(resp.proficiency_choices[0].from[case2Selections[1]].name);
    returnArray.push(resp.proficiency_choices[0].from[case2Selections[2]].name);
    return returnArray;
  }

  getDisplayProficiencies(prof: string[]){
    let count: number = 0;
    while(count < prof.length){
      prof[count] = prof[count].substring(7);
      count++;
    }
    return prof;
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

  getNewCharacter(): Character{
    if(this.characterQueue.length <= this.MINIMUM_SIZE){
      this.loadNameQueue();
    }
    return this.characterQueue.shift();
  }

  getMyCharacters(user: User): any{
    this.http.getAllCharacters(user).subscribe(
      resp => {
        for(let x = 0; x < resp.length; x++){
          resp[x].proficiencies = this.removeEmptyProciencies(resp[x].proficiencies);

        }
        return resp;
      },
      error => {return null},
      () => console.log("Retrieved all characters successfully.")
    );
  }

  removeEmptyProciencies(prof: string[]){
    let count = 0;
    let newList: string[] = [];
    while(count < prof.length){
      if((prof[count] != null) && (prof[count] != '')){
        newList.push(prof[count]);
      }
      count++;
    }
    return newList;
  }
}
