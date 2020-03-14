import { Component, OnInit } from '@angular/core';
import { DayService } from 'src/app/services/day.service';
import * as moment from 'moment';
import { Day } from 'src/app/data/Day';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  timesheetDate: moment.Moment = moment();

  constructor(
    private dayService: DayService
  ) { }

  ngOnInit(): void {
    this.setTimesheetDate();
  }

  setTimesheetDate() {
    this.dayService.daySelected.subscribe((day: Day) => this.timesheetDate = day.date);
  }

}
