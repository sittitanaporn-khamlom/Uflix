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

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  scrollLeft() {
    const container = document.getElementById('videoList');
    container?.scrollBy({ left: -window.innerWidth * 0.8, behavior: 'smooth' });
  }

  scrollRight() {
    const container = document.getElementById('videoList');
    container?.scrollBy({ left: window.innerWidth * 0.8, behavior: 'smooth' });
  }
}