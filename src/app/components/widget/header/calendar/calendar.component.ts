import { Component, OnInit } from '@angular/core';
import { DateUtilService } from 'src/app/utils/date-util.service';
import * as moment from 'moment';
import { DayService } from 'src/app/services/day.service';
import { Day } from 'src/app/data/day';
import { DayEvent } from 'src/app/data/DayEvent';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  daysData = [];
  days: Day[] = [];
  selectedDay: Day;
  currentDate: moment.Moment;

  constructor(
    private dayService: DayService,
    private dateUtilService: DateUtilService
  ) { }

  ngOnInit(): void {
    this.currentDate = moment();
    this.days = this.dayService.getDaysRange(moment().subtract(6, 'days'), moment());
    this.getDaysData();
    this.selectDate(moment());
  }

  getDaysData() {
    for (let day of this.days) {
      let events: DayEvent[] = day.events;
      let dayDate = day.date;
      const workingMinutes = this.dayService.getWorkingMinutes(day)
      const workingHours = (workingMinutes > 0) ? moment().startOf('day').add(workingMinutes, 'minutes').format('H:mm') : '-';

      this.daysData.push({
        date: dayDate,
        events: events,
        isToday: dayDate.format('DD.MM.YYYY') === this.currentDate.format('DD.MM.YYYY'),
        isWeekend: dayDate.day() === 0 || dayDate.day() === 6,
        workHours: workingHours,
        status: this.dayService.getDayStatus(day)
        // selected: this.selectedDay.date.format('DD.MM.YYYY') === dayDate.format('DD.MM.YYYY')
      })
    }

    return this.daysData;
  }

  selectDay(day) {
    this.selectedDay = day;
    this.dayService.daySelected.emit(day);
  }

  selectDate(date: moment.Moment) {
    const day = this.dayService.getByDate(date);
    this.selectDay(day);
  }

}

