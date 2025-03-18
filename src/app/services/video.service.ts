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
    },
    { 
      title: 'Sombra Negra ความยุติธรรมในเงามืด MS 13 ต้องกลัว', 
      thumbnail: 'https://i.ytimg.com/vi/2BxMP6lZHKU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAVmLQi-L7zZ2OEwnI0aOJ8O7DQeg',
      videoUrl: 'https://youtu.be/2BxMP6lZHKU?si=Nz_4_ldopwbeAaUF',
      videoId: '2BxMP6lZHKU?si=Nz_4_ldopwbeAaUF'
    },
    { 
      title: 'รับซื้อของเก่า จะเจ๋งหรือจะขาดทุน ?', 
      thumbnail: 'https://i.ytimg.com/an_webp/LHRKIa2C4no/mqdefault_6s.webp?du=3000&sqp=CIb65r4G&rs=AOn4CLBLZvYeGTFFHmL-0iILbU7EPxpE6g',
      videoUrl: 'https://youtu.be/LHRKIa2C4no?si=LaaIIGQkuco-Sfhx',
      videoId: 'LHRKIa2C4no?si=LaaIIGQkuco-Sfhx'
    },
    { 
      title: 'เรื่องเล่าเคสหลงอยู่กลางทะเลทราย 10 วัน ( แต่รอด ) ... | aimmuno', 
      thumbnail: 'https://i.ytimg.com/an_webp/a5fKOWcVQVg/mqdefault_6s.webp?du=3000&sqp=CKja5r4G&rs=AOn4CLDI8QffMd1IjY7DnLOU6wnYPEd0cA',
      videoUrl: 'https://youtu.be/a5fKOWcVQVg?si=rmWKtmL-Bqz62nOA',
      videoId: 'a5fKOWcVQVg?si=rmWKtmL-Bqz62nOA'
    },
    { 
      title: 'รู้แล้วเหยียบ!! เดี่ยว300%: ยืนเดี่ยว "คนกลางคืน" : อาเธอร์ gssspotted', 
      thumbnail: 'https://i.ytimg.com/an_webp/MKV_Dx2ambI/mqdefault_6s.webp?du=3000&sqp=CPT_5r4G&rs=AOn4CLC9OYx3Erufs9DeIpVM8rtwN61M4w',
      videoUrl: 'https://youtu.be/MKV_Dx2ambI?si=93AaJ8Mzz0k5p1OB',
      videoId: 'MKV_Dx2ambI?si=93AaJ8Mzz0k5p1OB'
    },
  ];
  
  getVideos() {
    return this.videos;
  }
}
