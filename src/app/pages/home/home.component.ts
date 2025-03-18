import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // ✅ ต้อง import CommonModule

@Component({
  selector: 'app-home',
  standalone: true,  // ✅ ใช้ Standalone Component
  imports: [CommonModule],  // ✅ ต้อง import CommonModule เพื่อให้ *ngFor ใช้งานได้
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  videos = [
    { 
      title: 'Stranger Things Trailer', 
      thumbnail: 'https://img.youtube.com/vi/b9EkMc79ZSU/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/b9EkMc79ZSU'
    },
    { 
      title: 'Money Heist Trailer', 
      thumbnail: 'https://img.youtube.com/vi/_InqQJRqGW4/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/_InqQJRqGW4'
    },
    { 
      title: 'The Witcher Trailer', 
      thumbnail: 'https://img.youtube.com/vi/tjujvMkqWe4/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/tjujvMkqWe4'
    },
    { 
      title: 'Breaking Bad Trailer', 
      thumbnail: 'https://img.youtube.com/vi/HhesaQXLuRY/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/HhesaQXLuRY'
    },
    { 
      title: 'Narcos Trailer', 
      thumbnail: 'https://img.youtube.com/vi/xl8zdCY-abw/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/xl8zdCY-abw'
    },
    { 
      title: 'Arcane Trailer', 
      thumbnail: 'https://img.youtube.com/vi/fXmAurh012s/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/fXmAurh012s'
    }
  ];
}
