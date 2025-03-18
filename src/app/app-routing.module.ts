import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WatchComponent } from './pages/watch/watch.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'watch/:id', component: WatchComponent }, // ✅ เพิ่ม Watch Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
