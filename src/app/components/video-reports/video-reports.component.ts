import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-reports',
  standalone: true,
  imports: [NgFor, NgIf], // Add this
  templateUrl: './video-reports.component.html',
  styleUrls: ['./video-reports.component.css'],
})
export class VideoReportsComponent {
  videos = [
    {
      title: 'Ricky’s Story - A Client Story of ABC for Health',
      url: 'https://www.youtube.com/embed/jEKoSR06QD8',
      thumbnailUrl: 'https://img.youtube.com/vi/jEKoSR06QD8/0.jpg',
    },
    {
      title: "Emily's Journey - Overcoming Challenges",
      url: 'https://www.youtube.com/embed/hEkWgRys8ws',
      thumbnailUrl: 'https://img.youtube.com/vi/hEkWgRys8ws/0.jpg',
    },
    {
      title: 'Static Thumbnail Video',
      url: 'https://www.youtube.com/embed/FxypAdrA-pc',
      thumbnailUrl: 'https://img.youtube.com/vi/FxypAdrA-pc/0.jpg',
    },
  ];

  currentIndex = 0;
  currentVideoUrl!: SafeResourceUrl | string;

  constructor(public sanitizer: DomSanitizer) {
    this.updateVideoUrl();
  }

  updateVideoUrl() {
    const video = this.videos[this.currentIndex];
    if (video.url) {
      this.currentVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        video.url
      );
    } else {
      this.currentVideoUrl = video.thumbnailUrl;
    }
  }

  prevSlide() {
    this.currentIndex = this.getLeftIndex();
    this.updateVideoUrl();
  }

  nextSlide() {
    this.currentIndex = this.getRightIndex();
    this.updateVideoUrl();
  }

  getLeftIndex(): number {
    return (this.currentIndex - 1 + this.videos.length) % this.videos.length;
  }

  getRightIndex(): number {
    return (this.currentIndex + 1) % this.videos.length;
  }
}
