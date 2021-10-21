import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {IData} from "../../models/data";

@Component({
  selector: 'app-data-dateils',
  templateUrl: './data-datails.component.html',
  styleUrls: ['./data-datails.component.css']
})
export class DataDatailsComponent implements OnInit {
  data: IData
  imgUrl: string

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(param => {
      this.data = this.router.getCurrentNavigation()?.extras.state as IData
      this.imgUrl=this.data.imgUrl
      console.log(this.data)
    })

  }

  ngOnInit(): void {
  }

}
