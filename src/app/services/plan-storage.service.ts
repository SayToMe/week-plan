import { Injectable } from '@angular/core';

export interface IActivity {
  title: string;
}

export interface IDayPlan {
  day: string;
  activities: IActivity[];
}

const appToken = 'unique-app-token_week-plan';

function getDefaultPlans(): IActivity[] {
  return [{
    title: 'First activity'
  }, {
    title: 'Second activity'
  }];
};

@Injectable()
export class PlanStorageService {
  constructor() { }

  getDayPlan(weekDay: string): IDayPlan {
    const activities = this.getDayPlanFromStorage(weekDay) || getDefaultPlans();

    return {
      day: weekDay,
      activities: activities
    };
  }

  saveDayPlan(dayPlan: IDayPlan) {
    this.storeDayPlan(dayPlan);
  }

  private getDayPlanFromStorage(weekDay: string): IActivity[] {
    const storedItem = localStorage.getItem(appToken + '|' + weekDay);
    return storedItem && JSON.parse(storedItem);
  }

  private storeDayPlan(dayPlan: IDayPlan) {
    localStorage.setItem(appToken + '|' + dayPlan.day, JSON.stringify(dayPlan.activities));
  }
}
