import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {IData} from "../../models/data";


const itemsPerPage: number = 3

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})

export class DataListComponent implements OnInit {
  data: IData[];
  page: number
  selectedPage: number
  itemsPerPage: number = 3

  constructor(private dataService: DataService) {
  }

  catchData(value: number) {
    this.selectedPage = value
    this.dataService.getData(this.selectedPage || 1, this.itemsPerPage || 3).subscribe(responce => {
      this.data = responce
    })

  }

  ngOnInit(): void {
    this.dataService.getData(this.selectedPage || 1, this.itemsPerPage || 3).subscribe(responce => {
      this.data = responce
    })

  }

}
