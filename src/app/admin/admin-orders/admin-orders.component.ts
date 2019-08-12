import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { map } from 'rxjs/operators';
import {ProfileService} from '../../service/profile.service';
import { AngularFireDatabase } from 'angularfire2/database';
import {Router} from '@angular/router';


@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  public  genderList = [{name : 'Male'}, {name : 'Female'}];
  uploadProgress : any;
  ImagePath : string = '';
  disableBtn = true;
  optionValue : number;
  constructor(
    private afStorage : AngularFireStorage,
    private profileServices : ProfileService,
    private router : Router
  ) { }
  
  ngOnInit() {
    
  }

  selectGender(event: any):void{
    console.log(event.target.value)
  }

  uploadProductImage(event) {
  const UserId = localStorage.getItem('userId');
  const profileImage = this.afStorage.upload(`/profileImage/${UserId}`, event.target.files[0]); 
  profileImage.then((snapshot) =>{
    this.ImagePath = snapshot.downloadURL;
    this.disableBtn = false;
})
  
}


profileSubmit(profileForm): void {
  const profileObjectCopy = {...profileForm.value}
  const profileObject = {...profileObjectCopy, profilImage : this.ImagePath};
  this.profileServices.saveProfileData(profileObject).then((data) => {
      this.router.navigate(['/products'])
  })
}

}
