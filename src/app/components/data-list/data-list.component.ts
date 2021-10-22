import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {IData} from "../../models/data";

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  data: IData[];


  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
this.dataService.getData().subscribe(responce => {
  this.data = responce
})
  }

}
