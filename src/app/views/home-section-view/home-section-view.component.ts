import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { HealthcareAccessComponent } from '../../components/healthcare-access/healthcare-access.component';
import { HistorySectionComponent } from '../../components/history-section/history-section.component';
import { ProjectSectionComponent } from '../../components/project-section/project-section.component';
import { VideoReportsComponent } from '../../components/video-reports/video-reports.component';
import { StayInformedComponent } from '../../components/stay-informed/stay-informed.component';

@Component({
  selector: 'app-home-section-view',
  standalone: true,
  imports: [ HeroSectionComponent,
      HealthcareAccessComponent,
      HistorySectionComponent,
      ProjectSectionComponent,
      VideoReportsComponent,
      StayInformedComponent,],
  templateUrl: './home-section-view.component.html',
  styleUrl: './home-section-view.component.css'
})
export class HomeSectionViewComponent {

}
