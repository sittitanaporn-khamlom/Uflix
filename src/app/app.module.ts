import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  // ✅ ต้อง import RouterModule
import { AppRoutingModule } from './app-routing.module'; // ✅ ตรวจสอบว่า Routing ถูก import แล้ว

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,  // ✅ ต้องใส่ RouterModule เพื่อให้ <router-outlet> ทำงาน
    AppRoutingModule  // ✅ ตรวจสอบว่ามีการ import Routing Module แล้ว
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
