import { Component, OnInit } from '@angular/core';
import { Day } from 'src/app/data/day';
import { DayService } from 'src/app/services/day.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  days: Day[]

  constructor(private dayService: DayService) { }

  ngOnInit(): void {
    this.getDays();
  }

  getDays(): void {
    this.dayService.getDays()
      .subscribe(days => this.days = days);
  }

}
