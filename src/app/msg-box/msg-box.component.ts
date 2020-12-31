import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';
import { Socket } from 'ngx-socket-io';

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

  message: string;
  
  constructor(private socket: Socket) {
  }

  ngOnInit(): void {
    this.socket.connect();

    this.socket.fromEvent('message').subscribe((message: any) => {
      this.showMessage(message);
    })
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
