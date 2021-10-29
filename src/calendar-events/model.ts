export interface CalendarEvent {
  title: string,
  startDate: Date,
  endDate: Date,
  date: string,
}

export interface EventListSectionViewModel {
  name: string,
  eventList: CalendarEvent[],
}

export type EventListViewModel = EventListSectionViewModel[];
