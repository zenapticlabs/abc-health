import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HealthcareAccessComponent } from './components/healthcare-access/healthcare-access.component';
import { HistorySectionComponent } from './components/history-section/history-section.component';
import { ProjectSectionComponent } from './components/project-section/project-section.component';
import { VideoReportsComponent } from './components/video-reports/video-reports.component';
import { StayInformedComponent } from './components/stay-informed/stay-informed.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroSectionComponent,
    HealthcareAccessComponent,
    HistorySectionComponent,
    ProjectSectionComponent,
    VideoReportsComponent,
    StayInformedComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ABCForHealth';
}
