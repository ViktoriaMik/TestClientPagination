import {Component, Input, OnInit} from '@angular/core';
import {IData} from "../../../models/data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.css']
})
export class DataItemComponent implements OnInit {
  @Input()
  dataItem: IData

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onDataItem(): void {
    this.router.navigate([`data/${this.dataItem.id}`],{state:this.dataItem})
  }
}
