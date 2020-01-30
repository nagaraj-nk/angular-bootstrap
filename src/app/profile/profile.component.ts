import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileInfo: Observable<any[]>

  constructor(db: AngularFireDatabase) {
    this.profileInfo = db.list('profileInfo/coreSkills').valueChanges()
  }
  
  ngOnInit() {
  }

}
