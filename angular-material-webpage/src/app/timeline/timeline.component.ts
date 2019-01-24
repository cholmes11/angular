import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experience } from '../experience/experience.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() timeline: Experience[];
  @Output() onExperienceSelected: EventEmitter<Experience>;

  private currentExperience: Experience;

  constructor() {
    this.onExperienceSelected = new EventEmitter();
  }


  clicked(experience: Experience): void {
    this.currentExperience = experience;
    this.onExperienceSelected.emit(experience);
  }

  isSelected(experience: Experience): boolean {
    if (!experience || !this.currentExperience) {
      return false;
    }

    return experience.company === this.currentExperience.company;
  }
  ngOnInit() {
  }
}
