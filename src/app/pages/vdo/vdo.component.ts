import { Component, HostListener, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vdo',
  templateUrl: './vdo.component.html',
  imports: [CommonModule, RouterModule],
  styleUrls: ['./vdo.component.css']
})
export class VdoComponent implements OnInit {
  videos: any[] = [];
  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.videos = this.videoService.getVideos();
    this.assignUniqueViews();
  }

  // ฟังก์ชันสำหรับกำหนดเลขวิวสุ่มที่ไม่ซ้ำกันให้แต่ละวิดีโอ
  assignUniqueViews(): void {
    const generated = new Set<number>();
    this.videos.forEach(video => {
      let view: number;
      do {
        view = Math.floor(Math.random() * 10000000) + 1;
      } while (generated.has(view));
      generated.add(view);
      video.views = view;
    });
  }
}
