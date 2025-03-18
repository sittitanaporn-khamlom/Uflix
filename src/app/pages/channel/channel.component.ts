import { Component, HostListener, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-channel',
  imports: [CommonModule, RouterModule],
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
  videos: any[] = [];
  subscriberCount: number = 9999999; // 8.01 ล้าน
  videoCount: number = 15; // Will be updated with the actual count from the service
  isScrolled = false;

  constructor(private videoService: VideoService) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }
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
      video.chaviews = view;
      });
    }
}
