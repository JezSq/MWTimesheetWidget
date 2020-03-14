import { DayEvent } from './DayEvent';

import * as moment from 'moment';

export interface Day {
  date: moment.Moment,
  events: DayEvent[]
}
