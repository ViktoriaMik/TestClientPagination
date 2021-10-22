import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  pages = [1, 2, 3]
  selectedPage: number
  @Output()
  lift = new EventEmitter

  constructor() {
  }

  ngOnInit(): void {
  }

  catchPage(value: number) {
    this.selectedPage = value
    this.lift.emit(this.selectedPage)
  }
}
