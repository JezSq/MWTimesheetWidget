import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Day } from '../data/day';
import { EnumDayEventType } from '../data/EnumDayEventType';

@Injectable({
  providedIn: 'root'
})
export class WidgetDataService implements InMemoryDbService {

  createDb() {
    const days: Day[] = [
      {
        date: new Date('2020-03-09'),
        events: [
          {
            quantity: 1,
            price: 10,
            isExpenseType: true,
            isHoursEventType: true,
            isAdditionalHoursEventType: false,
            isWorkHour: true,
            isApproved: true,
            isRejected: false,
            tasksCount: 10,
            eventType: EnumDayEventType.WorkingTime,
            firstTaskStart: new Date('2020-03-09 08:00'),
            lastTaskEnd: new Date('2020-03-09 17:00')
          }
        ]
      }
    ];

    return { days };
  }

}
