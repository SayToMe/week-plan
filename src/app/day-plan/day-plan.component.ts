import { PlanStorageService, IDayPlan, IActivity } from './../services/plan-storage.service';
import { Component, OnInit, Input } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-day-plan',
  templateUrl: './day-plan.component.html',
  styleUrls: ['./day-plan.component.css'],
})
export class DayPlanComponent implements OnInit {
  @Input()
  weekDay: string;

  dayPlan: IDayPlan;
  newActivityName = '';
  groupName = 'plan-bag';

  isDragging = false;

  dragulaOptions = {
    removeOnSpill: true,
    ignoreInputTextSelection: false,
    moves: (el, source, handle, sibling) => {
      return !el.classList.contains('new-plan-activity');
    },
    invalid: (el) => {
      return el.classList.contains('new-plan-activity');
    }
  };

  constructor(private dragulaService: DragulaService, private planStorageService: PlanStorageService) {
    try {
      this.dragulaService.createGroup(this.groupName, this.dragulaOptions);
    } catch {

    }
  }

  ngOnInit() {
    this.dayPlan = this.planStorageService.getDayPlan(this.weekDay);

    this.dragulaService.drag(this.groupName).subscribe((val) => {
      this.isDragging = true;
    });

    this.dragulaService.dragend(this.groupName).subscribe((val) => {
      this.isDragging = false;

      this.updateDayPlan();
    });
  }

  addNewActivity() {
    const newActivity = <IActivity>{
      title: this.newActivityName
    };

    this.dayPlan.activities.push(newActivity);
    this.newActivityName = '';

    this.save();
  }

  updateDayPlan() {
    this.save();
  }

  private save() {
    this.planStorageService.saveDayPlan(this.dayPlan);
  }
}
