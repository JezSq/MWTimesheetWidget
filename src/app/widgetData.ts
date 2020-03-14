import { Day } from './data/day';
import * as moment from 'moment';
import { EnumDayEventType } from './data/EnumDayEventType';

export const widgetData: Day[] = [
  {
    date: moment('2020-03-09'),
    events: [
      {
        quantity: 0,
        price: 0,
        isHoursEventType: true,
        isExpenseType: false,
        isAdditionalHoursEventType: false,
        isWorkHour: false,
        isApproved: true,
        isRejected: false,
        tasksCount: 10,
        eventType: EnumDayEventType.WORKING_TIME,
        firstTaskStart: moment('2020-03-09 08:00'),
        lastTaskEnd: moment('2020-03-09 10:00')
      },
      {
        quantity: 0,
        price: 0,
        isHoursEventType: true,
        isExpenseType: false,
        isAdditionalHoursEventType: false,
        isWorkHour: false,
        isApproved: false,
        isRejected: true,
        tasksCount: 10,
        eventType: EnumDayEventType.WORKING_TIME,
        firstTaskStart: moment('2020-03-09 10:00'),
        lastTaskEnd: moment('2020-03-09 12:00')
      }
    ]
  },
  {
    date: moment('2020-03-12'),
    events: [
      {
        quantity:100,
        price: 1000,
        isHoursEventType: false,
        isExpenseType: true,
        isAdditionalHoursEventType: false,
        isWorkHour: false,
        isApproved: false,
        isRejected: false,
        tasksCount: null,
        eventType: EnumDayEventType.LIFTLEIE_DAGPRIS,
        firstTaskStart: null,
        lastTaskEnd: null
      }
    ]
  },
  {
    date: moment('2020-03-13'),
    events: [
      {
        quantity: 0,
        price: 0,
        isHoursEventType: true,
        isExpenseType: false,
        isAdditionalHoursEventType: false,
        isWorkHour: false,
        isApproved: true,
        isRejected: false,
        tasksCount: 10,
        eventType: EnumDayEventType.WORKING_TIME,
        firstTaskStart: moment('2020-03-13 08:00'),
        lastTaskEnd: moment('2020-03-13 10:00')
      },
      {
        quantity: 0,
        price: 0,
        isHoursEventType: true,
        isExpenseType: false,
        isAdditionalHoursEventType: false,
        isWorkHour: false,
        isApproved: false,
        isRejected: true,
        tasksCount: 10,
        eventType: EnumDayEventType.WORKING_TIME,
        firstTaskStart: moment('2020-03-13 10:00'),
        lastTaskEnd: moment('2020-03-13 11:00')
      }
    ]
  },
  {
    date: moment('2020-03-14'),
    events: [
      {
        quantity: 0,
        price: 0,
        isHoursEventType: true,
        isExpenseType: false,
        isAdditionalHoursEventType: false,
        isWorkHour: false,
        isApproved: true,
        isRejected: false,
        tasksCount: 10,
        eventType: EnumDayEventType.WORKING_TIME,
        firstTaskStart: moment('2020-03-14 08:00'),
        lastTaskEnd: moment('2020-03-14 10:00')
      },
      {
        quantity: 0,
        price: 0,
        isHoursEventType: true,
        isExpenseType: false,
        isAdditionalHoursEventType: false,
        isWorkHour: false,
        isApproved: false,
        isRejected: false,
        tasksCount: 10,
        eventType: EnumDayEventType.WORKING_TIME,
        firstTaskStart: moment('2020-03-14 10:00'),
        lastTaskEnd: moment('2020-03-14 11:00')
      },
      {
        quantity: 0,
        price: 0,
        isHoursEventType: true,
        isExpenseType: false,
        isAdditionalHoursEventType: false,
        isWorkHour: false,
        isApproved: false,
        isRejected: false,
        tasksCount: 10,
        eventType: EnumDayEventType.OVERTIME,
        firstTaskStart: moment('2020-03-14 17:00'),
        lastTaskEnd: moment('2020-03-14 18:00')
      },
      {
        quantity: 10,
        price: 200,
        isHoursEventType: false,
        isExpenseType: true,
        isAdditionalHoursEventType: false,
        isWorkHour: false,
        isApproved: false,
        isRejected: false,
        tasksCount: 10,
        eventType: EnumDayEventType.LIFTLEIE_DAGPRIS,
        firstTaskStart: null,
        lastTaskEnd: null
      },
      {
        quantity: 0,
        price: 0,
        isHoursEventType: false,
        isExpenseType: true,
        isAdditionalHoursEventType: true,
        isWorkHour: false,
        isApproved: false,
        isRejected: false,
        tasksCount: 10,
        eventType: EnumDayEventType.LIFTLEIE_TIMPERIS,
        firstTaskStart: moment('2020-03-14 16:00'),
        lastTaskEnd: moment('2020-03-14 17:00')
      }
    ]
  }
]
