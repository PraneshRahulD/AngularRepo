import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oddeven',
  templateUrl: './oddeven.component.html',
  styleUrls: ['./oddeven.component.css']
})
export class OddevenComponent implements OnInit {
ids =[1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit(): void {
  }

}
