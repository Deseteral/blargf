export interface CalendarEvent {
  title: string,
  startDate: Date,
  endDate: Date,
  date: string,
}

export interface EventGroup {
  name: string,
  eventList: CalendarEvent[],
}
