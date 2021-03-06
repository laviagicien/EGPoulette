import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { io } from 'socket.io-client/build/index';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild('msg') msg: ElementRef;

  private socket: any;

  constructor() { 
    this.socket = io('ws://laviagicien.freeboxos.fr', {
      transports: ['websocket'], 
      forceNew: true
    });
  }

  ngOnInit(): void {

  }

  sendMsg() {
    const msg = this.msg.nativeElement.value;
    this.socket.emit('new-message', msg);
    this.msg.nativeElement.value = "";
  }

}
