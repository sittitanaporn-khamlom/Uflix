import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WatchComponent } from './pages/watch/watch.component';
import { VdoComponent } from './pages/vdo/vdo.component';
import { VideoService } from './services/video.service';
import { ChannelComponent } from './pages/channel/channel.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'watch/:id', component: WatchComponent },
  { path: 'channel', component: ChannelComponent },
  { path: 'video', component: VdoComponent } // ✅ เพิ่มเส้นทางสำหรับ VDO
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [VideoService]
})
export class AppRoutingModule {}
