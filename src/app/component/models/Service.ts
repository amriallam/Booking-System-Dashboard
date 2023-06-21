import { ServiceStatus } from "./ServiceStatus";

export class Service{
    constructor(
        public name : string,
        public description : string,
        public status : ServiceStatus ,
        public id ? : number
    ){}
}