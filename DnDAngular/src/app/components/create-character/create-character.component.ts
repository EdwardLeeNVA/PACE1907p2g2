import { Component, OnInit } from '@angular/core';
import {Character} from '../../models/character';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  character: Character = {
    id: 0,
    player_id: 0,
    name: 'Default',
    race: 'Dwarf',
    dndClass: 'Lumberjack',
    prof_1: '',
    prof_2: '',
    prof_3: '',
    prof_4: '',
    rprof: 'Nunchuck master'
  };

  public raceURL: string = "http://dnd5eapi.co/api/races/";
  public classURL: string = "/DnDGenerator/Generator/Classes";
  public nameURL: string = "https://api.namefake.com/";
  public servName: string = "/DnDGenerator/Generator/Name";

  generateCharacter(){
    console.log("Generate Character called.");
    this.getClass();
    this.getRandomName();
  }

  getClass(){
    const getClass = new XMLHttpRequest();
    getClass.onreadystatechange = () => {
      console.log("Ready State " + getClass.readyState);
      if((getClass.readyState == 4) && (getClass.status == 200)){
        const resp = JSON.parse(getClass.responseText);
        const index = Math.random() * resp.length;
        this.character.dndClass = resp[index].name;
      }
    };
    getClass.open("get", this.classURL);
    getClass.send();
  }

  getRandomName(){
    const getRandomName = new XMLHttpRequest();
    getRandomName.onreadystatechange = () => {
      console.log("Ready State " + getRandomName.readyState);
      if((getRandomName.readyState == 4) && (getRandomName.status == 200)){
        const resp = JSON.parse(getRandomName.responseText);
        this.character.name = resp.name;
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
        const index = Math.random() * resp.length;
        this.character.race = resp[index].name;
      }
    };
    getRace.open("get", this.raceURL);
    getRace.send();
  }

  getProficiency(url: string){

  }
}
