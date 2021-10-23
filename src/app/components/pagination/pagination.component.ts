import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  pages = [1, 2, 3]
  selectedPage: number = 1
  @Output()
  lift = new EventEmitter

  constructor() {
  }

  ngOnInit(): void {
  }

  setSelectedpage(page: number) {
    console.log(page)
    this.selectedPage = page
    this.lift.emit(this.selectedPage)

  }
}
