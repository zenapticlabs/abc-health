import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.css',
})
export class StaffListComponent {
  staffList = [
    {
      name: 'Bobby Peterson',
      role: 'Executive Director/Public Interest Attorney',
      phone: '(608) 261-6939 ext. 201',
      image: 'assets/84f7fda3d3bae09976463586ff93eed1.png',
      description: `Bobby is the founder and Executive Director of ABC for Health, Inc. and My Coverage Plan, Inc. A 1987 graduate of the University of Wisconsin Law School, Bobby began his law career at the Center for Public Representation. In 1994, Bobby founded ABC, which continues to connect children and families with health care benefits through advocacy and benefits counseling. Bobby has extensive experience representing clients with access to health care and coverage issues, particularly health insurance claim denials. In 1998 he helped found the Public Interest Law Section of the State Bar of Wisconsin. In 2011, Bobby was recognized by the State Bar Public Interest Law Section with the Dan Tuchsherer Lifetime achievement award. In 2005 he helped initiate HealthWatch Wisconsin, a statewide outreach, education, and advocacy organization that promotes better access to health care and coverage. In 2010, he founded a new subsidiary organization, My Coverage Plan Inc, an innovative new technology firm to help providers and consumers connect to and maximize all available health care coverage. Bobby loves to travel and to explore new places. He enjoys a good craft beer, food from the grill and a strong cup of black coffee in the morning.`,
    },
    {
      name: 'Brynne McBride',
      role: 'Chief Operating Officer/Public Interest Attorney',
      phone: '(608) 261-6939 ext. 210',
      image: 'assets/e08cb7258bc69f19a376e9377fca85e0.png',
      description: `Brynne is the Chief Operating Officer for ABC for Health Inc., where she has provided program and grants management, financial operation, and legal services support services since 2007. Brynne helps translate the agency’s direct client work into education, training, and policy recommendations, contributing to HealthWatch Wisconsin, Inc. Before ABC, Brynne worked as an attorney for Wisconsin Judicare, a Legal Services Corporation office in northern Wisconsin. She received a law degree from the University of Iowa College of Law and degrees in Chemistry and Political Science from Bryn Mawr College. Brynne and her husband live in Madison, but spend most weekends on their organic farm in rural Jefferson where she gardens, cans fruits and vegetables, and sips coffee while enjoying views from the old porch swing.`,
    },
    {
      name: 'Melissa Havermann',
      role: 'Health Benefits Counselor/Legal Advocate',
      phone: '(608) 261-6939 ext. 209',
      image: 'assets/82117bc65c427d8c4c877e20dee1aa43.png',
      description: `Melissa is a Health Benefits Counselor/Legal Advocate at ABC for Health. She earned a Bachelor's Degree in Elementary Education from Southeast Missouri State University in 2012 and is currently completing a Graduate Certificate in Paralegal Studies through Webster University. Before joining ABC, Melissa spent nine years teaching a beautifully diverse array of children. Through this experience she saw firsthand how limited access to health care and basic needs affects the lives of so many children and families. She is elated to have the opportunity to help Wisconsinites find the coverage they need to access crucial care. In her free time Melissa loves playing with her preschool aged daughter, taking her dog for long walks and watching bad sci-fi movies.`,
    },
    {
      name: 'Nick Grobarchik',
      role: 'Bilingual Health Benefits Advocate',
      phone: '(608) 261-6939',
      image: 'assets/9065d97e99e616cbe054ac302f92d745.png',
      description: `Nick is a Bilingual Health Benefits Advocate at ABC for Health. He graduated from UW-Madison in 2014 with a Bachelor's Degree in Political Science, History, and Spanish. Before joining ABC he worked at Epic Systems in Verona and J.J. Keller in Neenah. He grew up in Green Bay, WI and worked at the Green Bay Packers Pro Shop in high school. Nick has experience navigating the healthcare insurance system after dealing with his own medical crisis throughout 2022. He looks forward to helping Wisconsin families and endeavors to spread the relief he felt after receiving affordable healthcare coverage. Nick enjoys reading, all things nerdy, playing trombone, and watching Wisconsin sports. Go Pack Go and On, Wisconsin!`,
    },
    {
      name: 'Dani Wetter',
      role: 'Health Benefits Counselor',
      phone: '(608) 261-6939 ext. 225',
      image: 'assets/004063824bdc105bc956427cda4c6ce4.png',
      description: `Dani is a Health Benefits Counselor at ABC for Health. She studied law at Loyola University Chicago and earned her Bachelor of Science degree in Political Science and Environmental Studies from the University of Wisconsin-Madison. After undergrad, Dani completed a year of service with AmeriCorps at Community Connections Free Clinic in Dodgeville, WI. At ABC, she interviews clients navigating health care coverage options and researches topics such as Birth Cost Recovery and telecommunications programs. In her free time, Dani enjoys spending time with friends, reading, writing, listening to music, and cuddling with her cats, Mr. Bingley and Mr. Darcy.`,
    },
    {
      name: 'Sarah Katzman',
      role: 'Bilingual Health Benefits Advocate',
      phone: '(608) 261-6939',
      image: 'assets/7ed41d3d99f168ed3f28e7726e1a2158.png',
      description: `Sarah is a Bilingual Health Benefits Advocate at ABC for Health. She graduated in 2012 from UW-Madison with a Bachelor of Arts Degree in Spanish and a Certificate in Dance. Although her educational background is not in human services, she has always been drawn to this field because she is passionate about supporting people in their journey to personal wellness. She has worked in a variety of settings, providing services related to volunteer coordination, case management, advocacy, and administrative support. Prior to working at ABC, Sarah had the privilege of serving at the following Madison organizations: Goodman Community Center, Just Dane (formerly MUM), DAIS, Focus Counseling, Access to Independence, and WI Alliance for Infant Mental Health. She is thrilled to join forces with ABC in the fight for health equity and social justice here in Wisconsin! In her spare time, Sarah enjoys dancing, hanging out with friends, and eating delicious takeout.`,
    },
    {
      name: 'Tim Hennigan',
      role: 'Staff Attorney',
      phone: '(608) 261-6939 ext. 203',
      image: 'assets/ca289a8613a1f9edf8d43ab199a936de.png',
      description: `Tim is a Staff Attorney at ABC for Health. He is a recent graduate of the University of Wisconsin Law School. He is a big fan of pad thai, dark beer, and cashews. When not working, Tim might be found running his top-notch D&D campaign, playing guitar, or at the gym – he’s lost 70 lbs in the past year and is looking better than ever! Tim is very excited to work at ABC for Health because it offers an all-too-rare chance for him to use his legal prowess for good.`,
    },
    {
      name: 'Faith Fuller',
      role: 'Health Benefits Advocate/Executive Assistant',
      phone: '(608) 261-6939',
      image: 'assets/17574ae08de777eabfccc10cd5555915.png',
      description: `Faith is a Health Benefits Advocate/Exec. Assistant at ABC for Health. She received a B.S. from U.W. Madison in Theatre and Psychology and an M.A. in Musical Theatre from NYU. In her free time, She enjoys playing D&D, baking, and spending time with her husband and their cat.`,
    },
    {
      name: 'Seth Grabow',
      role: 'Health Benefits Advocate',
      phone: '(608) 261-6939',
      image: 'assets/7316bcfba041042955c6120e9410118e.png',
      description: `Seth is a Health Benefits Advocate at ABC for Health. In December of 2022, he graduated from UW-Madison with a bachelor’s degree in Political Science and History-with an emphasis on American history. During the summer of 2022, Seth worked for the Wisconsin Historical Society documenting the history of the Wisconsin School for the Deaf, located in his hometown of Delavan, Wisconsin. He is thrilled to help clients navigate the complicated heathcare space, pursuing the best possible outcome for themselves and their families. When he is not working on behalf of Wisconsinites, Seth enjoys, playing basketball with friends, reading any history book he can get his hands on, and walking his dog, Appa.`,
    },
  ];
}
