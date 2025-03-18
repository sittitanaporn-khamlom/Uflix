import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videos = [
    { 
      title: 'Stranger Things Trailer', 
      thumbnail: 'https://img.youtube.com/vi/b9EkMc79ZSU/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/b9EkMc79ZSU',
      videoId: 'b9EkMc79ZSU'
    },
    { 
      title: 'Money Heist Trailer', 
      thumbnail: 'https://img.youtube.com/vi/_InqQJRqGW4/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/_InqQJRqGW4',
      videoId: '_InqQJRqGW4'
    },
    { 
      title: 'The Witcher Trailer', 
      thumbnail: 'https://img.youtube.com/vi/tjujvMkqWe4/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/tjujvMkqWe4',
      videoId: 'tjujvMkqWe4'
    },
    { 
      title: 'Breaking Bad Trailer', 
      thumbnail: 'https://img.youtube.com/vi/HhesaQXLuRY/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/HhesaQXLuRY',
      videoId: 'HhesaQXLuRY'
    },
    { 
      title: 'Narcos Trailer', 
      thumbnail: 'https://img.youtube.com/vi/xl8zdCY-abw/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/xl8zdCY-abw',
      videoId: 'xl8zdCY-abw'
    },
    { 
      title: 'Arcane Trailer', 
      thumbnail: 'https://img.youtube.com/vi/fXmAurh012s/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/fXmAurh012s',
      videoId: 'fXmAurh012s'
    }
  ];

  getVideos() {
    return this.videos;
  }
}
