import { Component, HostListener, OnInit } from '@angular/core';
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
    src: ['../../assets/audio/among-us.mp3'],
    volume: 1.0
  });

  message: string = '';

  socket: any;
  
  constructor() {
    this.socket = io('ws://laviagicien.freeboxos.fr', {
      transports: ['websocket'],
      forceNew: true
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
    await this.delay(40000);
    msgContainer.classList.toggle('reveal');
  }
}
