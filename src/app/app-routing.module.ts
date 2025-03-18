import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WatchComponent } from './pages/watch/watch.component';
import { VideoService } from './services/video.service'; // เพิ่ม Video Service

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'watch/:id', component: WatchComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [VideoService] // ลงทะเบียน VideoService
})
export class AppRoutingModule {}
