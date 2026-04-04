import { Component } from '@angular/core';
import { HistoryTimelineComponent } from '../../history-timeline/history-timeline.component';

@Component({
  selector: 'app-time-line',
  standalone: true,
  imports: [HistoryTimelineComponent],
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.css'
})
export class TimeLineComponent {

}
