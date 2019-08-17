import { Component, OnInit , Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  @Input() finalProductPrice: number;
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  redirectToCheckOut() : void {
    this.router.navigate(['/delivery-address'])
  }

}
