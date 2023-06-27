import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';
import { jwtVerify } from 'jose';
import { EncodedJWTSecretKey } from 'src/environments/environment';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  decodedToken:any;
  encodedToken!:string;
  user:User=new User();
  userID:string='fef417b9-78f5-439a-8c9d-b0025f2afff6'

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
  //   });
  // }).catch((error) => {
  //   console.error('Token verification failed:', error);
  // });


  this.service.GetUserById(this.userID).subscribe(res => {
    this.user = res?.data;
  })
 
}
}

