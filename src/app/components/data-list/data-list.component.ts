import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {IData} from "../../models/data";


const  itemsPerPage: number = 3

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})

export class DataListComponent implements OnInit {
  data: IData[];
  page: number

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getData(1,3).subscribe(responce => {
      this.data = responce
    })
  }

}
