import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name;
  constructor(public appService: AppService) { }

  ngOnInit() {
  }
  add() {
    return this.appService.changeDate(this.name)
  }
}
