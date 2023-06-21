export interface BookingItem {
  id: number,
  day: string,
  startTime: string,
  endTime: string,
  date: string;
  location: string;
  serviceId: number;
  status: number;
  totalCost: number;
  userEmail: string;
}
