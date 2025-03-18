import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe'; // ✅ Import Safe Pipe

@Component({
  selector: 'app-watch',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
  videoId: string = '';
  videoTitle: string = 'วิดีโอที่เลือก';
  videoDescription: string = 'รายละเอียดวิดีโอ, คำอธิบาย และข้อมูลเพิ่มเติม';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.videoId = params.get('id') || 'dQw4w9WgXcQ'; // ✅ ใช้ค่าจาก URL หรือใช้ค่าเริ่มต้น
    });
  }

  get videoUrl() {
    return `https://www.youtube.com/embed/${this.videoId}`;
  }
}
