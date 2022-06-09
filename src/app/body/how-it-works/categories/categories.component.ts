import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  

  content=[
    {
      hovering:false,
      src:'../../../../assets/category/Acting.png',
      head:'Acting & Directing',
      para:'Skills to create a masterpiece comes with great practice and hard work. Present your masterpiece to the world here!'
    },
    {
      hovering:false,
      src:'../../../../assets/category/dancing.png',
      head:'Dance',
      para:'You go high and feel the best when you dance? Present to us your best moves and we’ll fall for you.'
    },
    {
      hovering:false,
      src:'../../../../assets/category/Sports.png',
      head:'Sports',
      para:'Good players inspire themselves, great players inspire others. All sports are covered here!.'
    },
    {
      hovering:false,
      src:'../../../../assets/category/musician.png',
      head:'Music',
      para:'Rhythms are everything to you? Let the world hear and applaud your talent here!'
    },
    {
      hovering:false,
      src:'../../../../assets/category/Maths.png',
      head:'Mathematics',
      para:'Are you a mastermind? Reveal your brilliance and be a whiz in math! Show the validity of your skill.'
    },
    {
      hovering:false,
      src:'../../../../assets/category/Arts.png',
      head:'Art & Drawing ',
      para:'Skills to create a masterpiece comes with great practice and hard work. Bring out the Picasso!'
    },
    {
      hovering:false,
      src:'../../../../assets/category/Science.png',
      head:'Science',
      para:'Hey junior Einstein! Experimenting and messing around with every object around you has been your interest?'
    },
    {
      hovering:false,
      src:'../../../../assets/category/Education.png',
      head:'Education',
      para:'Your ability to learn is worthy and so is your hard work. Your education never goes out in vain. Join hands to teach us the better.'
    },
    {
      hovering:false,
      src:'../../../../assets/category/Acting.png',
      head:'Writing & Poetry',
      para:'Fabricate the tale that you have reserved in your terrific mind and let the world explore you. '
    },
    {
      hovering:false,
      src:'../../../../assets/category/Innovation.png',
      head:'Innovation',
      para:'Put life to your work with innovation. Bring out the genius ideas that you own forward! Apply today.'
    },
    {
      hovering:false,
      src:'../../../../assets/category/Fashion.png',
      head:'Fashion',
      para:'The world without style is boring. We need you! Bring the fashion that attracts us with a force we cannot control.'
    },
    {
      hovering:false,
      src:'../../../../assets/category/Fitness.png',
      head:'Fitness',
      para:'The toughest and the diligent are our favourite. Strengthen your muscles and tackle our minds.'
    },
    {
      hovering:false,
      src:'../../../../assets/category/Chef.png',
      head:'Cooking',
      para:'For the art that we can eat ! Mix your craftsmanship and creativity to tempt us to the max.'
    },
    {
      hovering:false,
      src:'../../../../assets/category/Technology.png',
      head:'Technology',
      para:'We are living technology! Any sufficiently advanced technology creates magic. Come forward, stun us.'
    }, {
      hovering:false,
      src:'../../../../assets/category/Photography.png',
      head:'Photography',
      para:'Flatter our minds while you shutter the lens. Let the beauty of life be captured.'
    }, {
      hovering:false,
      src:'../../../../assets/category/Singing.png',
      head:'Singing',
      para:'The only thing better than singing would be ‘more singing’. This is the chance to mesmerize us with not just your voice but technique.'
    }, {
      hovering:false,
      src:'../../../../assets/category/socialworker.png',
      head:'Social',
      para:'Want to work for the society and benefit more people through your initiatives, come we will provide your work the recognition it needs.'
    }, {
      hovering:false,
      src:'../../../../assets/category/Intelligence.png',
      head:'Intelligence',
      para:'Your ability to learn is worthy and so is your hard work. Your education never goes out in vain. Join hands to teach us the better.'
    }, {
      hovering:false,
      src:'../../../../assets/category/Magician.png',
      head:'Magician',
      para:'Magic is believing in yourself, If you can do that you can make anything happen. '
    }, {
      hovering:false,
      src:'../../../../assets/category/Comedy.png',
      head:'Comedian',
      para:'You are only given a little spark of madness. You must not lose it.'
    }, {
      hovering:false,
      src:'../../../../assets/category/others.png',
      head:'Other',
      para:'Talent has no bounds and so is our categories. Present the best of what you are in any domain that amazes us. '
    },
  ]
  
  constructor() {}

  ngOnInit(): void {
  }

}
