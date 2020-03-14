import { EnumDayEventType } from './EnumDayEventType';
import * as moment from 'moment';

export interface DayEvent {
  quantity: number,
  price: number,
  eventType: EnumDayEventType,
  isExpenseType: boolean,
  isHoursEventType: boolean,
  isAdditionalHoursEventType: boolean,
  isWorkHour: Boolean,
  isApproved: Boolean,
  isRejected: Boolean,
  tasksCount: number,
  firstTaskStart: moment.Moment,
  lastTaskEnd: moment.Moment
}
