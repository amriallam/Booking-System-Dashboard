export interface Ticket {
  id: number,
  title: string,
  description: string,
  date: Date,
  status: string,
  userId: string,
  category: string,
  handlerId?: string
}

