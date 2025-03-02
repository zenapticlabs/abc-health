import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-section.component.html',
  styleUrl: './history-section.component.css',
})
export class HistorySectionComponent {
  selectedIndex = 0; // First item is selected by default

  timeline = [
    {
      year: '1994-1998',
      title: 'THE BEGINNING',
      description: 'ABC for Health founded, emerges as a nonprofit.',
    },
    {
      year: '1999-2003',
      title: '21ST CENTURY ADVOCACY',
      description: 'ABC expands the health benefits counseling model.',
    },
    {
      year: '2004-2006',
      title: 'THE FIGHT FOR FAMILIES',
      description: 'ABC secures its place in the fight for families..',
    },
    {
      year: '2007-2010',
      title: 'THE SEEDS OF CHANGE',
      description: 'ABC launches a series of outreach and education projects.',
    },
    {
      year: '2011-2015',
      title: 'HEALTH BENEFITS TECHNOLOGY',
      description:
        'ABC pilots the next generation of coverage screening technology.',
    },
    {
      year: '2016-2019',
      title: 'PRECISION PATIENT ADVOCACY',
      description:
        'ABC unveils the precision patient advocacy model of health benefits counseling.',
    },
  ];

  selectItem(index: number) {
    this.selectedIndex = index;
  }
}
