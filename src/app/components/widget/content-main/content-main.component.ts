import { Component, OnInit } from '@angular/core';
import { Day } from 'src/app/data/day';
import { DayService } from 'src/app/services/day.service';
import { DayEvent } from 'src/app/data/DayEvent';
import { EnumDayEventType } from 'src/app/data/EnumDayEventType';
import * as moment from 'moment';

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.scss']
})
export class ContentMainComponent implements OnInit {

  selectedDay: Day;
  firstWorkingHour;
  lastWorkingHour;
  workingHours = null;
  overtimeHours = null;
  expenseQuantity: number = 0;
  expenseSum: number = 0;
  additionalHours = null;
  daySummaryData = [];

  constructor(private dayService: DayService) { }

  ngOnInit(): void {
    this.getSelectedDay();
    this.setDaySummaryData();
  }


  getSelectedDay() {
    this.dayService.daySelected.subscribe((day: Day) => this.selectedDay = day);
  }

  setDaySummaryData() {
    this.dayService.daySelected.subscribe((day: Day) => {
      const events: DayEvent[] = day?.events;

      let hourEvents: DayEvent[] = [];
      let hourOvertimeEvents: DayEvent[] = [];
      let expenseEvents: DayEvent[] = [];
      let additionalHourEvents: DayEvent[] = [];

      let workingMinutes = 0;
      let overtimeMinutes = 0;
      let additionalMinutes = 0;
      let expenseQuantity = 0;
      let expenseSum = 0;

      if (events) {
        events.forEach(event => {
          if (event.isHoursEventType && event.eventType == EnumDayEventType.WORKING_TIME) hourEvents.push(event);
          if (event.isHoursEventType && event.eventType == EnumDayEventType.OVERTIME) hourOvertimeEvents.push(event);
          if (event.isExpenseType && event.eventType == EnumDayEventType.LIFTLEIE_DAGPRIS) expenseEvents.push(event);
          if (event.isAdditionalHoursEventType && event.eventType == EnumDayEventType.LIFTLEIE_TIMPERIS) additionalHourEvents.push(event);
        });
      }

      if (hourEvents) {
        this.firstWorkingHour = hourEvents[0]?.firstTaskStart.format('HH:mm');
        this.lastWorkingHour = hourEvents[hourEvents.length - 1]?.lastTaskEnd.format('HH:mm');

        hourEvents.forEach(event => {
          workingMinutes += event.lastTaskEnd.diff(event.firstTaskStart, 'minutes');
          this.workingHours = (workingMinutes > 0) ? moment().startOf('day').add(workingMinutes, 'minutes').format('H:mm') : null;
        });
      }

      if (hourOvertimeEvents) {
        hourOvertimeEvents.forEach(event => {
          overtimeMinutes += event.lastTaskEnd.diff(event.firstTaskStart, 'minutes');
        });

        this.overtimeHours = (overtimeMinutes > 0) ? moment().startOf('day').add(overtimeMinutes, 'minutes').format('H:mm') : null;
      }

      if (expenseEvents) {
        expenseEvents.forEach(event => {
          expenseQuantity += event.quantity;
          expenseSum += event.price
        });

        this.expenseQuantity = expenseQuantity;
        this.expenseSum = expenseSum;
      }

      if (additionalHourEvents) {
        additionalHourEvents.forEach(event => {
          additionalMinutes += event.lastTaskEnd.diff(event.firstTaskStart, 'minutes');
        });

        this.additionalHours = (additionalMinutes > 0) ? moment().startOf('day').add(additionalMinutes, 'minutes').format('H:mm') : null;
      }
    });
  }

}
