import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-timeline.component.html',
  styleUrls: ['./history-timeline.component.css']
})
export class HistoryTimelineComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  timelineData = [
    {
      id: '1994-1998',
      years: '1994-1998',
      title: 'The Beginning',
      image: 'assets/banner1994.jpg',
      points: [
        'We founded ABC in 1994 without a national association or sole benefactor to support our work. Our “braided” funding sources reflected the commitments of multiple foundations and government grants. We received help from family and friends to help find an office, load and move furniture, and begin the adventure of a very unique public interest law firm in Wisconsin.',
        'In 1994 our funding included WisTAF that first secured my position as a staff attorney at the Center for Public Representation in 1988. ABC still maintains and relies on WisTAF as a funding source today to help power the delivery of direct legal services for low-income clients seeking health care coverage and insurance.',
        'By 1996, we adopted emerging website technology and created a website www.safteyweb.org that is still used today!.',
        'We initiated the steps to start a Public Interest Law Section of the State Bar of Wisconsin. In 1997, we started a HealthWatch Coalition of healthcare coverage advocates in Dane County, that still exists and thrives in 2019',
        'In 1998, in response to an emerging Managed Care and HMO environment, we secured federal funds to initiate a Families Managed Advocacy project that created structures and supports to address access to coverage and care for Children & Youth with Special Health Care Needs (CYSHCN) and expanded new HealthWatch Coalitions.'
      ]
    },
    {
      id: '1999-2003',
      years: '1999-2003',
      title: '21st Century Advocacy',
      image: 'assets/21stcentury.png',
      points: [
        'In 1999 we started a statewide Covering Kids and Covering Kids Expansion that helped build a network to help folks across Wisconsin. That lead to additional projects and services focused on CYSHCN that we still operate today!',
        ' In 2002, in a flourish of social entrepreneurism, ABC first partnered with St. Mary’s in Madison then later Janesville, Meriter Hospital, St. Clare Baraboo and Sauk Prairie Health Care in a Health Benefits Counseling relationship for patients. We helped patients secure coverage and insurance and that helped the providers get paid!',
        'We started ABC for Rural Health, Inc. in 2003, led by Mike Rust and secured a number of federal Health Resources and Services Administration grants to promote better access to coverage for rural populations.',
        'We learned from our client work and conducted policy research to develop new strategies to support the expansion and delivery of health care coverage like our groundbreaking Pathway Plan of 2003. We developed new ideas and extended our thinking in 2010, 2012 and again with WisCare in 2019'
      ]
    },
    {
      id: '2004-2009',
      years: '2004-2009',
      title: 'The Fight for Families',
      image: 'assets/2007.jpg',
      points: [
        'In 2005 we initiated a planning process to create HealthWatch Wisconsin as a project of ABC for Health to promote education and policy issues to help extend and expand health care coverage to the people of Wisconsin',
        'We purchased and renovated our own building in 2007, the Mifflin Coop building, with the foresight to include a web-casting studio and space to grow',
        'We partnered with the State of Wisconsin to develop a Child Health Outreach (CHIPRA) program that ran through 2011'
      ]
    },
    {
      id: '2010-2015',
      years: '2010-2015',
      title: 'The Seeds of Change',
      image: 'assets/rally.jpg',
      points: [
        ' In 2010 with the help of NIH funds, we created our for-profit subsidiary My Coverage Plan, Inc. and later secured a US Patent on a groundbreaking health benefits screening and coverage plan software we now call Advocus',
        ' In 2013, ABC partnered with ABC for Rural Health to help create a Safetyweb Network in Polk County to help vulnerable patients secure health coverage'
      ]
    },
    {
      id: '2016-2018',
      years: '2016-2018',
      title: 'Precision Patient Advocacy',
      image: 'assets/ppa.jpg',
      points: [
        'In 2016 we partnered on a 2nd CHIPRA outreach grant that included a “Back to School” emphasis to help enroll uninsured kids and parents..',
        'In 2016, we secured a 2nd National Institute of Health business technology development grant to help build Gurulz (think a mash-up of Guru/rules) as a learning management system to help teach people the intricacies of health benefits counseling. These funds bolstered My Coverage Plan Inc. our private technology subsidiary--we may be the only non-profit public interest law firm in the U.S. to create a Health IT firm!',
        'In 2017, we started HeathWatch Wisconsin, Inc. as an outreach education and issue advocacy subsidiary to help translate the lessons gleaned from direct services for ABC clients to inform our efforts to teach, train, and inform public policy.',
        'From 2016-2018, we adopted cutting edge My Coverage Plan software to screen clients for health coverage and build a comprehensive health care coverage record. We call the technology Advocus that applies a process we call Precision Patient Advocacy.'
      ]
    }
  ];

  selectedId = this.timelineData[0].id;
  selectedIndex = 0;

  scrollTo(id: string, index?: number) {
    this.selectedId = id;
    if (index !== undefined) {
      this.selectedIndex = index;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
  }

onWheel(event: WheelEvent) {
    const container = this.scrollContainer?.nativeElement;
    if (container && event.deltaY !== 0) {
      event.preventDefault(); // Only prevent if actually scrolling
      container.scrollLeft += event.deltaY;
    }
  }
  
}
