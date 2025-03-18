import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
[x: string]: any;
  isScrolled = false;
  
  videos = [
    {thumbnail: 'https://img.youtube.com/vi/b9EkMc79ZSU/hqdefault.jpg', videoUrl: 'b9EkMc79ZSU' },
    {thumbnail: 'https://img.youtube.com/vi/_InqQJRqGW4/hqdefault.jpg', videoUrl: '_InqQJRqGW4' },
    {thumbnail: 'https://img.youtube.com/vi/tjujvMkqWe4/hqdefault.jpg', videoUrl: 'tjujvMkqWe4' },
    {thumbnail: 'https://img.youtube.com/vi/HhesaQXLuRY/hqdefault.jpg', videoUrl: 'HhesaQXLuRY' },
    {thumbnail: 'https://img.youtube.com/vi/xl8zdCY-abw/hqdefault.jpg', videoUrl: 'xl8zdCY-abw' },
    {thumbnail: 'https://img.youtube.com/vi/fXmAurh012s/hqdefault.jpg', videoUrl: 'fXmAurh012s' },
    {thumbnail: 'https://img.youtube.com/vi/oqxAJKy0ii4/hqdefault.jpg', videoUrl: 'oqxAJKy0ii4' },
    {thumbnail: 'https://img.youtube.com/vi/nW948Va-l10/hqdefault.jpg', videoUrl: 'nW948Va-l10' },
    {thumbnail: 'https://img.youtube.com/vi/tcrNsIaQkb4/hqdefault.jpg', videoUrl: 'tcrNsIaQkb4' },
    {thumbnail: 'https://img.youtube.com/vi/Di310WS8zLk/hqdefault.jpg', videoUrl: 'Di310WS8zLk' },
    {thumbnail: 'https://img.youtube.com/vi/oVzVdvGIC7U/hqdefault.jpg', videoUrl: 'oVzVdvGIC7U' },
    {thumbnail: 'https://img.youtube.com/vi/0DAmWHxeoKw/hqdefault.jpg', videoUrl: '0DAmWHxeoKw' }
  ];
  videos2 = [
    {thumbnail: 'https://img.youtube.com/vi/b9EkMc79ZSU/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/b9EkMc79ZSU' },
    {thumbnail: 'https://img.youtube.com/vi/_InqQJRqGW4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/_InqQJRqGW4' },
    {thumbnail: 'https://img.youtube.com/vi/tjujvMkqWe4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/tjujvMkqWe4' },
    {thumbnail: 'https://img.youtube.com/vi/HhesaQXLuRY/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/HhesaQXLuRY' },
    {thumbnail: 'https://img.youtube.com/vi/xl8zdCY-abw/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/xl8zdCY-abw' },
    {thumbnail: 'https://img.youtube.com/vi/fXmAurh012s/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/fXmAurh012s' },
    {thumbnail: 'https://img.youtube.com/vi/oqxAJKy0ii4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
    {thumbnail: 'https://img.youtube.com/vi/nW948Va-l10/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/nW948Va-l10' },
    {thumbnail: 'https://img.youtube.com/vi/tcrNsIaQkb4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/tcrNsIaQkb4' },
    {thumbnail: 'https://img.youtube.com/vi/Di310WS8zLk/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/Di310WS8zLk' },
    {thumbnail: 'https://img.youtube.com/vi/oVzVdvGIC7U/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/oVzVdvGIC7U' },
    {thumbnail: 'https://img.youtube.com/vi/0DAmWHxeoKw/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/0DAmWHxeoKw' }
  ];
  videos3 = [
    {thumbnail: 'https://img.youtube.com/vi/b9EkMc79ZSU/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/b9EkMc79ZSU' },
    {thumbnail: 'https://img.youtube.com/vi/_InqQJRqGW4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/_InqQJRqGW4' },
    {thumbnail: 'https://img.youtube.com/vi/tjujvMkqWe4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/tjujvMkqWe4' },
    {thumbnail: 'https://img.youtube.com/vi/HhesaQXLuRY/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/HhesaQXLuRY' },
    {thumbnail: 'https://img.youtube.com/vi/xl8zdCY-abw/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/xl8zdCY-abw' },
    {thumbnail: 'https://img.youtube.com/vi/fXmAurh012s/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/fXmAurh012s' },
    {thumbnail: 'https://img.youtube.com/vi/oqxAJKy0ii4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
    {thumbnail: 'https://img.youtube.com/vi/nW948Va-l10/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/nW948Va-l10' },
    {thumbnail: 'https://img.youtube.com/vi/tcrNsIaQkb4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/tcrNsIaQkb4' },
    {thumbnail: 'https://img.youtube.com/vi/Di310WS8zLk/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/Di310WS8zLk' },
    {thumbnail: 'https://img.youtube.com/vi/oVzVdvGIC7U/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/oVzVdvGIC7U' },
    {thumbnail: 'https://img.youtube.com/vi/0DAmWHxeoKw/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/0DAmWHxeoKw' }
  ];
  videos4 = [
    {thumbnail: 'https://img.youtube.com/vi/b9EkMc79ZSU/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/b9EkMc79ZSU' },
    {thumbnail: 'https://img.youtube.com/vi/_InqQJRqGW4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/_InqQJRqGW4' },
    {thumbnail: 'https://img.youtube.com/vi/tjujvMkqWe4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/tjujvMkqWe4' },
    {thumbnail: 'https://img.youtube.com/vi/HhesaQXLuRY/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/HhesaQXLuRY' },
    {thumbnail: 'https://img.youtube.com/vi/xl8zdCY-abw/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/xl8zdCY-abw' },
    {thumbnail: 'https://img.youtube.com/vi/fXmAurh012s/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/fXmAurh012s' },
    {thumbnail: 'https://img.youtube.com/vi/oqxAJKy0ii4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
    {thumbnail: 'https://img.youtube.com/vi/nW948Va-l10/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/nW948Va-l10' },
    {thumbnail: 'https://img.youtube.com/vi/tcrNsIaQkb4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/tcrNsIaQkb4' },
    {thumbnail: 'https://img.youtube.com/vi/Di310WS8zLk/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/Di310WS8zLk' },
    {thumbnail: 'https://img.youtube.com/vi/oVzVdvGIC7U/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/oVzVdvGIC7U' },
    {thumbnail: 'https://img.youtube.com/vi/0DAmWHxeoKw/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/0DAmWHxeoKw' }
  ];
  videos5 = [
    {thumbnail: 'https://img.youtube.com/vi/b9EkMc79ZSU/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/b9EkMc79ZSU' },
    {thumbnail: 'https://img.youtube.com/vi/_InqQJRqGW4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/_InqQJRqGW4' },
    {thumbnail: 'https://img.youtube.com/vi/tjujvMkqWe4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/tjujvMkqWe4' },
    {thumbnail: 'https://img.youtube.com/vi/HhesaQXLuRY/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/HhesaQXLuRY' },
    {thumbnail: 'https://img.youtube.com/vi/xl8zdCY-abw/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/xl8zdCY-abw' },
    {thumbnail: 'https://img.youtube.com/vi/fXmAurh012s/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/fXmAurh012s' },
    {thumbnail: 'https://img.youtube.com/vi/oqxAJKy0ii4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
    {thumbnail: 'https://img.youtube.com/vi/nW948Va-l10/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/nW948Va-l10' },
    {thumbnail: 'https://img.youtube.com/vi/tcrNsIaQkb4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/tcrNsIaQkb4' },
    {thumbnail: 'https://img.youtube.com/vi/Di310WS8zLk/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/Di310WS8zLk' },
    {thumbnail: 'https://img.youtube.com/vi/oVzVdvGIC7U/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/oVzVdvGIC7U' },
    {thumbnail: 'https://img.youtube.com/vi/0DAmWHxeoKw/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/0DAmWHxeoKw' }
  ];
  videos6 = [
    {thumbnail: 'https://img.youtube.com/vi/b9EkMc79ZSU/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/b9EkMc79ZSU' },
    {thumbnail: 'https://img.youtube.com/vi/_InqQJRqGW4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/_InqQJRqGW4' },
    {thumbnail: 'https://img.youtube.com/vi/tjujvMkqWe4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/tjujvMkqWe4' },
    {thumbnail: 'https://img.youtube.com/vi/HhesaQXLuRY/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/HhesaQXLuRY' },
    {thumbnail: 'https://img.youtube.com/vi/xl8zdCY-abw/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/xl8zdCY-abw' },
    {thumbnail: 'https://img.youtube.com/vi/fXmAurh012s/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/fXmAurh012s' },
    {thumbnail: 'https://img.youtube.com/vi/oqxAJKy0ii4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
    {thumbnail: 'https://img.youtube.com/vi/nW948Va-l10/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/nW948Va-l10' },
    {thumbnail: 'https://img.youtube.com/vi/tcrNsIaQkb4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/tcrNsIaQkb4' },
    {thumbnail: 'https://img.youtube.com/vi/Di310WS8zLk/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/Di310WS8zLk' },
    {thumbnail: 'https://img.youtube.com/vi/oVzVdvGIC7U/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/oVzVdvGIC7U' },
    {thumbnail: 'https://img.youtube.com/vi/0DAmWHxeoKw/hqdefault.jpg', videoUrl: 'https://www.youtube.com/embed/0DAmWHxeoKw' }
  ];
  videoCategories = [
    { id: 'videos1', title: 'หนังแนะนำ', videos: this.videos },
    { id: 'videos2', title: 'มาใหม่ล่าสุด', videos: this.videos2 },
    { id: 'videos3', title: 'ซีรีส์ยอดนิยม', videos: this.videos3 },
    { id: 'videos4', title: 'อนิเมะมาแรง', videos: this.videos4 },
    { id: 'videos5', title: 'ละครไทยที่คุณอาจชอบ', videos: this.videos5 },
    { id: 'videos6', title: 'หนังแอ็กชันสุดมันส์', videos: this.videos6 }
  ];
  
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  scrollLeft(id: string) {
    const container = document.getElementById(id);
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }
  
  scrollRight(id: string) {
    const container = document.getElementById(id);
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }
  
}