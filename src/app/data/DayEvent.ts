import { EnumDayEventType } from './EnumDayEventType';

export interface DayEvent {
  quantity: Number,
  price: Number,
  eventType: EnumDayEventType,
  isExpenseType: Boolean,
  isHoursEventType: Boolean,
  isAdditionalHoursEventType: Boolean,
  isWorkHour: Boolean,
  isApproved: Boolean,
  isRejected: Boolean,
  tasksCount: Number,
  firstTaskStart: Date,
  lastTaskEnd: Date
}
