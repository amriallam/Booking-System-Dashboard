export class TicketResponse {
  constructor(
    public ticketId: number,
    public userId: string,
    public response: string,
    public assistantId: string,
  ) { }
}
