import { Animal } from '../animal';
import { AnimalsService } from './../animals.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {
  
  public animals: Animal[] = [];

  public selectedAnimal: Animal = {name: "Name", gender: "Gender", age: 0, arrival: "2022-01-01", description: "When picked, a brief description of the animal will appear here", image: "../assets/img/no_animal.jpg", isVaxed: true, isCat: true, size: -1, id: 9}; 

  constructor(private _animalsService: AnimalsService) {
  }

  ngOnInit(): void {
    this.animals = this._animalsService.ANIMALS;
  }

  onSelect(animal: Animal) {
    this.selectedAnimal = animal;
    console.log(this.selectedAnimal)
  }

}
