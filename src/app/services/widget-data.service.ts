import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Day } from '../data/day';
import { EnumDayEventType } from '../data/EnumDayEventType';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class WidgetDataService implements InMemoryDbService {

  createDb() {
    const days: Day[] = [
      {
        date: moment('2020-03-09'),
        events: [
          {
            quantity: 0,
            price: 0,
            isHoursEventType: true,
            isExpenseType: false,
            isAdditionalHoursEventType: false,
            isWorkHour: true,
            isApproved: true,
            isRejected: false,
            tasksCount: 10,
            eventType: EnumDayEventType.WORKING_TIME,
            firstTaskStart: moment('2020-03-09 08:00'),
            lastTaskEnd: moment('2020-03-09 17:00')
          }
        ]
      }
    ];

    return { days };
  }

}
