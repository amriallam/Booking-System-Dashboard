export interface UserRole {
  roleName: string,
  isSelected: boolean
}

export interface User{

  userID:string,
  name?:string,
  roles:Array<UserRole>
}
export interface UserData{
  id:string,
  firstName:string,
  lastName:string,
  email:string,
  userName:string,
  roles:Array<string>
}