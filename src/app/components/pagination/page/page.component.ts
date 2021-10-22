import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input()
  page: number
  selectedPage:number

  constructor() {
  }

  ngOnInit(): void {
  }
  onPage(page:number):void{
    console.log(page)
    this.selectedPage=page
  }

}
