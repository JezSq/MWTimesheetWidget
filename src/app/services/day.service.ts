import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Day } from '../data/day';
import * as moment from 'moment';
import { DateUtilService } from '../utils/date-util.service';
import { map } from "rxjs/operators";
import { widgetData } from '../widgetData';
import { DayEvent } from '../data/DayEvent';
import { EnumDayStatus } from '../data/EnumDayStatus';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  private daysUrl = "api/days";
  private days: Day[];
  daysRange;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  daySelected = new EventEmitter<Day>();

  constructor(private http: HttpClient,
    private dateUtil: DateUtilService
  ) {
    this.days = widgetData;
  }

  getDays(): Observable<Day[]> {
    return this.http.get<Day[]>(this.daysUrl);
  }

  setDayData(day: Day) {

  }

  getDaysRange(dateFrom: moment.Moment, dateTo: moment.Moment) {
    const dates = this.dateUtil.getDateRange(moment().subtract(6, 'days'), moment())
    let daysRange = [];

    for (let date of dates.by('day')) {
      let filteredEvents = this.getByDate(date);
      daysRange.push(filteredEvents);
    }

    return daysRange;
  }

  getByDate(date: moment.Moment) {
    let days = this.days.filter(day => day.date.format('DD.MM.YYY') === date.format('DD.MM.YYY'));
    return (days.length > 0) ? days[0] : { date: date };
  }

  getWorkingMinutes(day: Day) {
    let minutes = 0;
    const events = day.events;

    if (events) {
      const hourEvents = events.filter(event => event.isHoursEventType === true);

      hourEvents.forEach(event => {
        minutes += event.lastTaskEnd.diff(event.firstTaskStart, 'minutes');
      });
    }

    return minutes;
  }

  getDayStatus(day: Day) {
    let status = EnumDayStatus.NO_TASKS;
    const events = day.events;

    if (events) {
      let rejectedEvents: DayEvent[] = [];
      let approvedEvents: DayEvent[] = [];

      events.forEach(event => {
        if (event.isApproved) approvedEvents.push(event);
        if (event.isRejected) rejectedEvents.push(event);
      })

      if (rejectedEvents?.length > 0) {
        status = EnumDayStatus.REJECTED;
      } else if ((rejectedEvents?.length <= 0) && (approvedEvents?.length > 0)) {
        status = EnumDayStatus.APPROVED
      } else {
        status = EnumDayStatus.NEUTRAL
      }
    }

    return status;
  }


}
