export class Ticket {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public date: Date,
    public status: string,
    public userId: string,
    public category: string,
    public handlerId?: string
  ) { }
}

