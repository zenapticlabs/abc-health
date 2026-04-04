import { Component } from '@angular/core';
import { LatestNewsSectionComponent } from '../../components/latest-news-section/latest-news-section.component';
import { AllNewsSectionComponent } from '../../components/all-news-section/all-news-section.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [LatestNewsSectionComponent,AllNewsSectionComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

}
