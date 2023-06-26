export class ResourceSpecialCharactaristics {
    constructor(
        public id:number,
        public TotalCapacity: number,
        public AvailableCapacity: number,
        public resourceID: number,
        public day :any,
        public ScheduleID?: number,
      ) { }
}
