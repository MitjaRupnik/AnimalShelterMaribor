import { Animal } from './animal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor() { }

  ANIMALS: Animal[] = [
    {
      name: "Džole",
      gender: "Male",
      age: 2,
      arrival: "2021-09-20",
      description: "Džole is a young male who was adopted along with Roger, Ariel and Martinka. At first he was frightened, but now he has turned into a great cuddler.",
      image: "../assets/img/cat_dzole.jpg",
      isVaxed: true,
      isCat: true,
      size: -1,
      id: 1
    },
    {
      name: "Jimmy",
      gender: "Male",
      age: 10,
      arrival: "2021-10-24",
      description: "Jimmy is still slightly reserved towards strangers, but when he gets to know the person, he relaxes and lets himself be caressed. He is a big dog, so he is looking for a home with a fenced garden. If you would like to meet him, please call us during office hours or send us an email to arrange a visit.",
      image: "../assets/img/dog_jimmy.jpg",
      isVaxed: true,
      isCat: false,
      size: 50,
      id: 2
    },
    {
      name: "Tayson",
      gender: "Male",
      age: 3,
      arrival: "2021-09-06",
      description: "Tayson is a friendly and energetic puppy looking for experienced owners. It has been adopted twice already, but has unfortunately been returned. He is looking for a determined adopter who will deal with him a lot, set boundaries for him and will not give up on him.",
      image: "../assets/img/dog_tayson.jpg",
      isVaxed: true,
      isCat: false,
      size: 40,
      id: 3
    },
    {
      name: "Kevin",
      gender: "Male",
      age: 4,
      arrival: "2021-11-23",
      description: "Kevin is a good old caring cat who loves human company.",
      image: "../assets/img/cat_kevin.jpg",
      isVaxed: false,
      isCat: true,
      size: -1,
      id: 4
    },
    {
      name: "Mali",
      gender: "Male",
      age: 10,
      arrival: "2021-07-07",
      description: "Mali is a wonderful puppy who loves swimming in the field, so his snout is always dirty. He needs active people who have a fenced yard where he will spend his energy and space in a warm house.",
      image: "../assets/img/dog_mali.jpg",
      isVaxed: true,
      isCat: false,
      size: 50,
      id: 5
    },
    {
      name: "Martinka",
      gender: "Female",
      age: 1.5,
      arrival: "2021-01-20",
      description: "Martinka is a young cat lady. For now, she is still a little distrustful, but she is becoming more confident and caring day by day. She is looking for patient owners who will give her time to get used to the new environment and people.",
      image: "../assets/img/cat_martinka.jpg",
      isVaxed: true,
      isCat: true,
      size: -1,
      id: 6
    },
    {
      name: "Kobi",
      gender: "Male",
      age: 4,
      arrival: "2021-02-18",
      description: "Kobi is an extremely friendly, caring and quick to learn dog. She loves running, mind games and human company, she also gets along well with children. He had already been adopted once, but due to lack of time he spent most of the day in boxing, they decided to return him to the shelter.",
      image: "../assets/img/dog_kobi.jpg",
      isVaxed: false,
      isCat: false,
      size: 30,
      id: 7
    },
    {
      name: "Pupa",
      gender: "Female",
      age: 1.5,
      arrival: "2021-01-20",
      description: "Pupa is a young feline beauty who was adopted together with Ariel and Martinka.",
      image: "../assets/img/cat_pupa.jpg",
      isVaxed: true,
      isCat: true,
      size: -1,
      id: 8
    },
    {
      name: "Roger",
      gender: "Male",
      age: 0.5,
      arrival: "2021-09-20",
      description: "Roger is a caring and calm young male.",
      image: "../assets/img/cat_roger.jpg",
      isVaxed: true,
      isCat: true,
      size: -1,
      id: 9
    },
    {
      name: "Reksi",
      gender: "Male",
      age: 11,
      arrival: "2021-07-01",
      description: "Reksi is a bigger dog who likes to run around the meadow and learn new tricks. He is looking for a home where he will have a large yard to play and run. He will be a loyal friend and great company to his man.",
      image: "../assets/img/dog_reksi.jpg",
      isVaxed: true,
      isCat: false,
      size: 40,
      id: 10
    },
    {
      name: "Mufi",
      gender: "Male",
      age: 1.5,
      arrival: "2021-01-25",
      description: "Mufi is a male of small stature with longer hair. He is looking for a home where he will be guaranteed enough movement and play, as he is a small energy bomb. He loves being in the company of people.",
      image: "../assets/img/dog_mufi.jpg",
      isVaxed: true,
      isCat: false,
      size: 30,
      id: 11
    }

  ];
}
