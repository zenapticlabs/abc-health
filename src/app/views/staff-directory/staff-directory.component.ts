import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../staff-directory/hero-section/hero-section.component';
import { StaffListComponent } from '../../staff-directory/staff-list/staff-list.component';
import { StaffDetailsComponent } from '../../staff-directory/staff-details/staff-details.component';


@Component({
  selector: 'app-staff-directory',
  standalone: true, // Ensure it's a standalone component
  templateUrl: './staff-directory.component.html',
  styleUrls: ['./staff-directory.component.scss'],
  imports: [HeroSectionComponent, StaffListComponent, StaffDetailsComponent] 
})
export class StaffDirectoryComponent {}
