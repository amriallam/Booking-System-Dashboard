export class User {
    constructor(
        public id?: string,
        public userName?: string,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public address?: string,
        public phoneNumber?: string,
        public lastUpdatedOn?: Date
      ) { }
}
