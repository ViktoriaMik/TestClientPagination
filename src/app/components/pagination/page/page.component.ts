import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input()
  page: number
  selectedPage:number

  @Output()
  lift=new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }
  onPage(page:number):void{
    this.selectedPage=page
    console.log(page, this.selectedPage )
    this.lift.emit(this.selectedPage)
  }

}
