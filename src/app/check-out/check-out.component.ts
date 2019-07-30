import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  @Input() finalProductPrice: number;
  constructor() { }

  ngOnInit() {
  }

}
