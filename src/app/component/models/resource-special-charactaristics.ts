export class ResourceSpecialCharactaristics {
    constructor(
        public id:number,
        public totalCapacity: number,
        public availableCapacity: number,
        public resourceID: number,
        public day :any,
        public scheduleID?: number,
      ) { }
}
