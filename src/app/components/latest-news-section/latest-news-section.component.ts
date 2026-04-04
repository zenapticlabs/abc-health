import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-latest-news-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-news-section.component.html',
  styleUrl: './latest-news-section.component.css'
})
export class LatestNewsSectionComponent {

  newsItems = [
    {
      image: 'assets/image (3).png',
      source: 'ABC for Health',
      title: 'PRESS RELEASE: Community Symposium Addresses State and Local Access to Coverage Needs for Patients',
      date: '20 December, 2024'
    },
    {
      image: 'assets/image (4).png',
      source: 'ABC for Health',
      title: 'PRESS ADVISORY: ABC for Health and HealthWatch Wisconsin Present "Medicaid Threats and Medical Debt"',
      date: '20 December, 2024'
    },
    {
      image: 'assets/image (5).png',
      source: 'Wisconsin Public Radio - Heard on Wisconsin Today',
      title: 'Can’t Afford Your Prescription? You Have Options',
      date: '20 December, 2024'
    }
  ];
}
