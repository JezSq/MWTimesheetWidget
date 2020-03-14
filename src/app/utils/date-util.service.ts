import { Injectable } from '@angular/core';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }


  getDateRange(dateFrom, dateTo) {
    return moment.range(dateFrom, dateTo);
  }

}
