import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./api/in-memory-data-service.service";
import { DataListComponent } from './components/data-list/data-list.component';
import { DataItemComponent } from './components/data-list/data-item/data-item.component';
import {RouterModule, Routes} from "@angular/router";
import { DataDatailsComponent } from './components/data-datails/data-datails.component';


const routes:Routes=[
  {path:'',redirectTo:'data',pathMatch:'full'},
  {path:'data', component:DataListComponent},
  {path:'data/:id', component:DataDatailsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    DataListComponent,
    DataItemComponent,
    DataDatailsComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
