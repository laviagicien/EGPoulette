import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @ViewChild('cd', {static: false}) private countdown: CountdownComponent;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.countdown.begin();
  }

}
