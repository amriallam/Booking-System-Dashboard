export class DataResponse<T> {
  constructor(
    public statusCode: number,
    public message: string,
    public data: T[]
  ) { }
}
