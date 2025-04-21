import { Component } from '@angular/core';
import { ReferralsComponent } from '../../components/referrals/referrals.component';
import { SupportComponent } from '../../components/support/support.component';

@Component({
  selector: 'app-referrals-page',
  standalone: true,
  imports: [ReferralsComponent, SupportComponent],
  templateUrl: './referrals-page.component.html',
  styleUrl: './referrals-page.component.css'
})
export class ReferralsPageComponent {

}
