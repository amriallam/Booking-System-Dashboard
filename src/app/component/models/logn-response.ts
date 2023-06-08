export class LoginResponse {
  constructor(
    public token: string,
    public expiration: Date
  ) { }
}
