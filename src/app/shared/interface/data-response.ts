export interface DataResponse<T> {
  statusCode: number,
  message: string,
  data: T[]
}
