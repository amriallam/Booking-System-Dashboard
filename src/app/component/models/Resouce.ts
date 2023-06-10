export class Resource {
  constructor(
    public id: string,
    public name: string,
    public resourceTypeId: number,
    public price: number,
    public resourceTypeName: string,
    public attributes: []
  ) { }
}
