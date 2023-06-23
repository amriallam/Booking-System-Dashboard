export class Role{
    constructor(
      public roleID:string,
      public permissions:Array<Permission>,
      public name? :string,
    
    ){}
}

export class Permission{
    constructor(
        public permissionName:string,
        public isSelected:boolean
    ){}
}

export class RoleData{
    constructor(
    public id:string ,
    public name:string
    ){}
}