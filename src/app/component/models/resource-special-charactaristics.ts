export class ResourceSpecialCharactaristics {
    constructor(
        public id:number,
        public TotalCapacity: number,
        public AvailableCapacity: number,
        public resourceID: number,
        public ScheduleID?: number,
      ) { }
}
