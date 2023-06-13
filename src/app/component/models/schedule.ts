export interface Schedule {
  scheduleId: number,
  day: string,
  startTime: string,
  endTime: string,
  available: boolean,
  shift: boolean,
}
