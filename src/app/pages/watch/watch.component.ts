import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-watch',
  standalone: true,
  imports: [CommonModule, RouterModule, SafeUrlPipe],
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
  videoId: string = '';
  videoTitle: string = 'วิดีโอที่เลือก';
  videoDescription: string = 'รายละเอียดวิดีโอ, คำอธิบาย และข้อมูลเพิ่มเติม';
  viewCount: number = 0;
  publishedDate: Date = new Date();
  channelName: string = 'Uflix';
  channelAvatar: string = 'assets/images/channel-avatar.jpg';
  allVideos: any[] = [];
  
  // ตัวแปรสำหรับติดตามสถานะ Subscribe/Unsubscribe
  isSubscribed: boolean = false;
  isScrolled = false;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {}

  ngOnInit() {
    // ดึงข้อมูลวิดีโอทั้งหมดจาก VideoService
    this.allVideos = this.videoService.getVideos();

    this.route.paramMap.subscribe(params => {
      this.videoId = params.get('id') || 'dQw4w9WgXcQ';

      // ค้นหาวิดีโอปัจจุบันเพื่ออัปเดตข้อมูลจริง
      const currentVideo = this.allVideos.find(v => v.videoId === this.videoId);
      if (currentVideo) {
        this.videoTitle = currentVideo.title;
        this.videoDescription = currentVideo.description || `รายละเอียดของวิดีโอ: ${currentVideo.title}`;
        this.viewCount = currentVideo.viewCount || 0;
        this.publishedDate = currentVideo.publishedDate ? new Date(currentVideo.publishedDate) : new Date();
        this.channelName = currentVideo.channelName || 'ชื่อช่องจริง';
        this.channelAvatar = currentVideo.channelAvatar || 'https://yt3.ggpht.com/LBaR6XOwd7cnZn0-MaDvIqPForj9JtP4_eC9i-JbfSHjFsutnZw6nwMjls8sUvBSHovXR5wshCQ=s176-c-k-c0x00ffffff-no-rj-mo';
      }
    });
  }

  get videoUrl() {
    return `https://www.youtube.com/embed/${this.videoId}`;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }
  // ฟังก์ชันสำหรับเปลี่ยนสถานะ Subscribe/Unsubscribe
  toggleSubscribe() {
    this.isSubscribed = !this.isSubscribed;
  }
}
