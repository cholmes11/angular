import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../experience/experience.model';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.css']
})
export class TimelineItemComponent implements OnInit {

  @Input() experience: Experience;

  constructor() { }

  ngOnInit() {
  }

}
