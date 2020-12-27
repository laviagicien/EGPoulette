import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-msg-box',
  templateUrl: './msg-box.component.html',
  styleUrls: ['./msg-box.component.scss']
})
export class MsgBoxComponent implements OnInit {

  delay = async (ms: number) => new Promise(res => setTimeout(res, ms));
  popUpSound = new Howl({
    src: ['../../assets/audio/popUpSound.wav'],
    volume: 1.0
  });
  
  constructor() { }

  ngOnInit(): void {
    this.showMessage();
  }

  async showMessage() {
    const msgContainer = <HTMLElement>document.getElementById('msgContainer');
    this.popUpSound.play();
    await this.delay(1000);
    msgContainer.classList.toggle('reveal');
    await this.delay(60000);
    msgContainer.classList.toggle('reveal');
  }
}
