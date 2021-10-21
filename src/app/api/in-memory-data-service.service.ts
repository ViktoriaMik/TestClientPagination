import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const data =[
      {name:'monument',id:1, imgUrl:'https://i.pinimg.com/564x/b5/0a/42/b50a42227f2d13ecc4e12bf52db77217.jpg'},
      {name:'pallion',id:2, imgUrl:'https://i.pinimg.com/564x/b3/d6/08/b3d608ffb10dc646d0c2bb036cd25767.jpg'},
      {name:'rialto',id:3, imgUrl:'https://i.pinimg.com/474x/35/31/91/353191a9f71374f441aeae911a5849b1.jpg'},
      {name:'roebuk',id:4, imgUrl:'https://i.pinimg.com/564x/e2/81/17/e281176e32ea8c20277e41675e11dc73.jpg'},
      {name:'place',id:5, imgUrl:'https://i.pinimg.com/564x/c5/87/66/c58766bd5e7b85743a882bf118c49b7a.jpg'},
      {name:'house',id:6, imgUrl:'https://i.pinimg.com/474x/ee/7c/f8/ee7cf88d9960fd00f2d82b1d9f36505a.jpg'},
      {name:'forest house',id:7, imgUrl:'https://i.pinimg.com/474x/05/72/a2/0572a21247e97d9a9f673080cb63e8bd.jpg'},
      {name:'fairy tail',id:8, imgUrl:'https://i.pinimg.com/564x/22/01/78/2201788e5d8d686801ea5aa191b3fdf2.jpg'},
      {name:'monument italy',id:9, imgUrl:'https://i.pinimg.com/474x/5f/f7/7a/5ff77a4cff04bebdc3555d0cbd78b0f0.jpg'},
      {name:'Chregraphie',id:10, imgUrl:'https://i.pinimg.com/564x/af/9a/ed/af9aed0dd55f54e56b6a597bae8c7183.jpg'},
    ];
    return {data};
  }

  constructor() { }
}
