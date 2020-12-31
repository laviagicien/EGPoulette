import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsgBoxComponent } from './msg-box/msg-box.component';
import { AdminComponent } from './admin/admin.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CountdownModule } from 'ngx-countdown';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'

const config: SocketIoConfig = { 
  url: 'http://localhost:3000', 
  options: {
    extraHeaders: {
      Authorization: "#"
    },
    transports: ['websocket']
  } 
};

@NgModule({
  declarations: [
    AppComponent,
    MsgBoxComponent,
    AdminComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
