import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild('msg') msg: ElementRef;

  constructor(private socket: Socket) { }

  ngOnInit(): void {
    this.socket.connect();
  }

  sendMsg() {
    const msg = this.msg.nativeElement.value;
    this.socket.emit('new-message', msg);
    this.msg.nativeElement.value = "";
  }

}
