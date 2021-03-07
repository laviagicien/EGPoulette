import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import SmokeMachine from '@bijection/smoke'

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

    const bottom = window.innerHeight;
    const midWidth = window.innerWidth / 4;
    
    const canvas = <HTMLCanvasElement>document.getElementById('smoke');
    const ctx = canvas.getContext('2d');

    const party = SmokeMachine(ctx, [255, 255, 255])

    party.start();
    party.addSmoke(midWidth, bottom, 100)
  }

}
