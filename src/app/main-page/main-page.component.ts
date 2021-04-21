import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
// import SmokeMachine from '@bijection/smoke'

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
    
  }

  playVideo() {
    let container = document.getElementById('containerVideo');
    let video = <HTMLVideoElement>document.getElementById('video');
    let button = <HTMLButtonElement>document.getElementById('button')
    button?.style.display = "none";
    video.volume = 1;
    video.play();
    video.onended = () => { 
      container?.classList.add('disapear');
      this.countdown.begin();
    }
  }

}
