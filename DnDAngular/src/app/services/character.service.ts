import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import * as randomName from "node-random-name";
//import random from "random-name";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  public raceURL: string = "http://dnd5eapi.co/api/races/";
  public classURL: string = "/DnDGenerator/Generator/Classes";
  public nameURL: string = "https://api.namefake.com/";
  public servName: string = "/DnDGenerator/Generator/Name";

  alignments: string[] = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];


  getClass(): string{
    const getClass = new XMLHttpRequest();
    getClass.onreadystatechange = () => {
      console.log("Ready State " + getClass.readyState);
      if((getClass.readyState == 4) && (getClass.status == 200)){
        console.log(" " + getClass.responseText);
        const resp = JSON.parse(getClass.responseText);
        const index = Math.floor(Math.random() * resp.results.length);
        return resp.results[index].name;
      } else if(getClass.readyState == 4){
        return '';
      }
    };
    getClass.open("get", this.classURL);
    getClass.send();
    return null;
  }

  getClassInfo(c: string){
    const newURL = this.classURL + '/' + c;
    const getClassInfo = new XMLHttpRequest();
    getClassInfo.onreadystatechange = () => {
      console.log("Sent request for class info to " + newURL);
      if((getClassInfo.readyState == 4) && (getClassInfo.status == 200)){
        const resp = JSON.parse(getClassInfo.responseText);
        if(c == 'Bard') return this.getProficiencyBard(resp);
        else if(c == 'Monk') return this.getProficiencyMonk(resp);
        else{
          let returnArray: string[] = [];
          switch(resp.proficiency_choices[0].choose){
            case 1:
              returnArray.push(resp.proficiency_choices[0].from[Math.floor(Math.random() * resp.proficiency_choices[0].choose)].name);
              return returnArray;
              break;
            case 2:
              const case2Selections = this.getRandomSelections(resp.proficiency_choices[0].choose, resp.proficiency_choices[0].from.length);
              returnArray.push(resp.proficiency_choices[0].from[case2Selections[0]].name);
              returnArray.push(resp.proficiency_choices[0].from[case2Selections[1]].name);
              return returnArray;
              break;
            case 3:
              const case3Selections = this.getRandomSelections(resp.proficiency_choices[0].choose, resp.proficiency_choices[0].from.length);
              returnArray.push(resp.proficiency_choices[0].from[case3Selections[0]].name);
              returnArray.push(resp.proficiency_choices[0].from[case3Selections[1]].name);
              returnArray.push(resp.proficiency_choices[0].from[case3Selections[2]].name);
              return returnArray;
              break;
            default:
              const case4Selections = this.getRandomSelections(resp.proficiency_choices[0].choose, resp.proficiency_choices[0].from.length);
              returnArray.push(resp.proficiency_choices[0].from[case4Selections[0]].name);
              returnArray.push(resp.proficiency_choices[0].from[case4Selections[1]].name);
              returnArray.push(resp.proficiency_choices[0].from[case4Selections[2]].name);
              returnArray.push(resp.proficiency_choices[0].from[case4Selections[3]].name);
              return returnArray;
              break;
          }
        }
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


  getRandomName(): string{
    //return random.first();
    return randomName({ first: true });
  }

  getRace(){
    const getRace = new XMLHttpRequest();
    getRace.onreadystatechange = () => {
      if((getRace.readyState == 4) && (getRace.status == 200)){
        const resp = JSON.parse(getRace.responseText);
        const index = Math.floor(Math.random() * resp.result.length);
        return resp.result[index].name;
      }
    };
    getRace.open("get", this.raceURL);
    getRace.send();
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
}
