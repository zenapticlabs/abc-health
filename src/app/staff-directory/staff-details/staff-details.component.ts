import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent {
  companyList = [
    {
      name: 'ABC for Rural Health, Inc.',
      staffList: [
        {
          name: 'Mike Rust',
          role: 'Chief Operating Officer',
          phone: '(608)358-0028',
          image: 'assets/55470ee10d5d3437558a4f5696710175.png',
          description: `Mike is the Chief Operating Officer of ABC for Rural Health in Balsam Lake, WI.
Mike is a Health Benefits Counselor and a pioneer in developing the concept and practice of health benefits counseling. Through his investigative efforts, he uncovered widespread misapplication of the Medicaid Deductible Feature, the Family Fiscal Unit determination process, and birth cost recovery systems. He has written a health care competency model and curriculum for Wisconsin's public health workforce, and he continues to work with health care providers and public health offices across Wisconsin to promote clinic, hospital, and agency-based health benefits counseling. Over the past two years, Mike has focused his advocacy efforts on access to mental health and substance use treatment services; while also continuing to work on issues related to HealthCheck (EPSDT), Birth Cost Recovery, and the development of training and technology to support benefits counseling work at clinics, hospitals, and health departments.`
        }
      ]
    },
    {
      name: 'My Coverage Plan, Inc.',
      staffList: [
        {
          name: 'Taylor Smith',
          role: 'Web Developer Consultant',
          phone: '(608) 261-6939 ext. 219',
          image: 'assets/686beb604a5e44abd3f33248f6af4812.png',
          description: `Taylor Smith is a web developer consultant for ABC for Health, Inc. and My Coverage Plan, Inc., where he specializes in interface design and user experience. Taylor received a B.A. in Mathematics from Arizona State University and completed post-bacc work in both linguistics and computer science. His professional background ranges from documentation of endangered languages to choral music arrangement to tech consulting for arts-centric startups. When not building the face of MCP’s applications, Taylor enjoys a number of creative hobbies including music, writing, and photography, and harbors a minor obsession with board games.`
        }
      ]
    }
  ];
  
}
