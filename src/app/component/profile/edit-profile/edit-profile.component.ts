import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';

import { jwtVerify } from 'jose';
import { EncodedJWTSecretKey } from 'src/environments/environment';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  user:User=new User("userID", "ZienabHesham100", "Zienab", "Hesham", "Zienab.hesham199@gmail.com", "Almansoura", "01024258847",  new Date());
  userID:string='13a2a123-d57d-4992-bc6a-16572ce945b3'

  UserbeforUpdate!: User;
  UserAfterUpdate !:User;

  decodedToken:any;
  encodedToken!:string;

  updatedPatientform!: FormGroup;

  editForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    address: new FormControl('', Validators.required),
  });

  constructor(private service:UserService) {}

  ngOnInit(): void {
    const encodedToken = localStorage.getItem("token");
    if (encodedToken != null) {
      this.encodedToken = encodedToken;
    }
    // jwtVerify(this.encodedToken, EncodedJWTSecretKey).then((result) => {
    //   this.decodedToken = result.payload;
    //   this.userID = this.decodedToken.Id;
    //   this.service.GetUserById(this.userID).subscribe(res => {
    //     console.log(this.user);
    //     this.user = res?.data;
    //     console.log(this.user);

    //     this.service.EditUser(this.user).subscribe(res=>{
          
    //     })
    //   this.UserbeforUpdate = this.user;
    //   this.UserbeforUpdate.patchValue({
    //     firstName :this.UserbeforUpdate.firstName,
    //     lastName :this.UserbeforUpdate.lastName,
    //     phoneNumber :this.UserbeforUpdate.phoneNumber,
    //     address :this.UserbeforUpdate.address,      
    //   })
    //   });
    // }).catch((error) => {
    //   console.error('Token verification failed:', error);
    // });
  
  }
}
