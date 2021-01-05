import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';
import { io } from 'socket.io-client/build/index';


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

  message: string = 'lorem ipsum dolor sit amet';

  socket: any;
  
  constructor() {
    this.socket = io('http://localhost:3000', {
      transports: ['websocket']
    });
  }

  ngOnInit(): void {
  
    this.socket.on('message', (msg: any) => {
      this.showMessage(msg)
    })

    this.popUpSound.load()
    
  }

  async showMessage(msg:string) {
    this.message = msg;
    const msgContainer = <HTMLElement>document.getElementById('msgContainer');
    this.popUpSound.play();
    await this.delay(500);
    msgContainer.classList.toggle('reveal');
    await this.delay(60000);
    msgContainer.classList.toggle('reveal');
  }
}
