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
    c_id: 0,
    c_name: 'Default',
    c_race: 'Dwarf',
    c_class: 'Lumberjack',
    c_proficiency: '',
    c_bio: 'Nunchuck master'
  };

  public raceURL: string = "http://dnd5eapi.co/api/races/";
  public classURL: string = "http://dnd5eapi.co/api/classes/";
  public nameURL: string = "https://api.namefake.com/";

  generateCharacter(){
    this.getClass();
    this.getRandomName();
    this.getRace();
  }

  getClass(){
    const getClass = new XMLHttpRequest();
    getClass.onreadystatechange = () => {
      if((getClass.readyState == 4) && (getClass.status == 200)){
        const resp = JSON.parse(getClass.responseText);
        const index = Math.random() * resp.length;
        this.character.c_class = resp[index].name;
      }
    };
    getClass.open("get", "http://dnd5eapi.co/api/classes/");
    getClass.send();
  }

  getRandomName(){
    const getRandomName = new XMLHttpRequest();
    getRandomName.onreadystatechange = () => {
      if((getRandomName.readyState == 4) && (getRandomName.status == 200)){
        const resp = JSON.parse(getRandomName.responseText);
        this.character.c_name = resp.name;
      }
    };
    getRandomName.open("get", this.nameURL);
    getRandomName.send();
  }

  getRace(){
    const getRace = new XMLHttpRequest();
    getRace.onreadystatechange = () => {
      if((getRace.readyState == 4) && (getRace.status == 200)){
        const resp = JSON.parse(getRace.responseText);
        const index = Math.random() * resp.length;
        this.character.c_race = resp[index].name;
      }
    };
    getRace.open("get", this.raceURL);
    getRace.send();
  }

  getProficiency(url: string){

  }
}
