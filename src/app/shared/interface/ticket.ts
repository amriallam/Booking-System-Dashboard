export interface Ticket {
  id: number;
  title: string;
  description: string;
  date: Date;
  status: string;
  userId: string;
  handlerId?: string;
  category: string
}

