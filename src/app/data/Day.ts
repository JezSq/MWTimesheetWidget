import { DayEvent } from './DayEvent';

export interface Day {
  date: Date,
  events: DayEvent[]
}
