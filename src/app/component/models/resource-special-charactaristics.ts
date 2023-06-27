export class ResourceSpecialCharactaristics {
    
    static fromFormValues(formValues: any): ResourceSpecialCharactaristics {
      return new ResourceSpecialCharactaristics(
        formValues.resourceNames,
        formValues.totalCapacity,
        formValues.availableCapacity,
        formValues.resourceID,
        formValues.ScheduleID=null
 
      );

    }
    constructor(
      public resourceName:string,
        public totalCapacity: number,
        public availableCapacity: number,
        public resourceID: number,
        public day ?:any,
        public ScheduleID?: number,
        public id?:number
      ) { }
}
