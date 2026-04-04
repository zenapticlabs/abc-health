import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { StaffDirectoryComponent } from './views/staff-directory/staff-directory.component';
import { HomeSectionViewComponent } from './views/home-section-view/home-section-view.component';
import { ReferralsPageComponent } from './views/referrals-page/referrals-page.component';
import { NewsComponent } from './views/news/news.component';
import { TimeLineComponent } from './views/time-line/time-line.component';


const routes: Routes = [
  { path: '', component: HomeSectionViewComponent },
  { path: 'staff-directory', component: StaffDirectoryComponent },
  { path: 'referrals', component: ReferralsPageComponent },
  { path: 'news', component: NewsComponent },
  { path: 'timeline', component: TimeLineComponent },
  { path: '**', redirectTo: '' } // Redirect unknown routes to Home
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
