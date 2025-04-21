import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 import this
import { FormsModule } from '@angular/forms'; // 👈 import this for ngModel

@Component({
  selector: 'app-all-news-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './all-news-section.component.html',
  styleUrl: './all-news-section.component.css'
})
export class AllNewsSectionComponent {
  searchTerm = ''; // 👈 search state

  newsItems = [
    {
      source: 'Wisconsin State Journal',
      title: 'Madison hospitals are ignoring medical debt problem, advocates say',
      date: '20 December, 2024'
    },
    {
      source: 'ABC for Health',
      title: 'PRESS RELEASE: Community Symposium Addresses State and Local Access to Coverage Needs for Patients',
      date: '20 December, 2024'
    },
    {
      source: 'ABC for Health',
      title: 'PRESS ADVISORY: ABC for Health and HealthWatch Wisconsin Present "Medicaid Threats and Medical Debt"',
      date: '20 December, 2024'
    },
    {
      source: 'Wisconsin Public Radio - Heard on Wisconsin Today',
      title: 'Can’t Afford Your Prescription? You Have Options',
      date: '20 December, 2024'
    },
    {
      source: 'Wisconsin Public Radio',
      title: 'Last day of health insurance enrollment during record-breaking year',
      date: '20 December, 2024'
    }
  ];

  // filtered news getter
  get filteredNews() {
    const term = this.searchTerm.toLowerCase();
    return this.newsItems.filter(item =>
      item.title.toLowerCase().includes(term) ||
      item.source.toLowerCase().includes(term)
    );
  }
}
