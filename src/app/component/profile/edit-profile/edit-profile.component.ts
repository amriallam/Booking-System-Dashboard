import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';

import { jwtVerify } from 'jose';
import { EncodedJWTSecretKey } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  user:User=new User();;
  userID:string='13a2a123-d57d-4992-bc6a-16572ce945b3'
  public isSubmitted = false;

  UserbeforUpdate!: User;
  UserAfterUpdate !:User;

  decodedToken:any;
  encodedToken!:string;
  editForm: FormGroup = new FormGroup({});


  constructor(private service:UserService,public router: Router) {
    this.editForm=new FormGroup({
      id: new FormControl(''),
      userName: new FormControl(''),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl(''),
      address: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    });
  
  }

  ngOnInit(): void {
    const encodedToken = localStorage.getItem("token");
    if (encodedToken != null) {
      this.encodedToken = encodedToken;
    }
    this.service.GetUserById(this.userID).subscribe(res => {
          console.log(this.user);
          this.user = res?.data;
          console.log(this.user);
  
          this.editForm.patchValue({
            id: this.user.id,
          userName: this.user.userName,
            firstName :this.user.firstName,
            lastName :this.user.lastName,
            email: this.user.email,
            address :this.user.address,      
            phoneNumber :this.user.phoneNumber,
          })

          console.log(this.editForm.value)
    });
  
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

  getControl(fullName:any): AbstractControl |null
  {
    return this.editForm.get(fullName);
  }

  save(formData: any) {
    if (this.editForm.errors) {
      return;
    }
   if (this.editForm.valid) {

    this.service.EditUser(formData.value).subscribe(data => {
      this.router.navigateByUrl("/profile/Details");

    });

    }
  }
}


