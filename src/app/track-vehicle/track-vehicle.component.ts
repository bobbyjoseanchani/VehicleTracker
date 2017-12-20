/** This function can be used to show the location on a map using a ready to use component like https://angular-maps.com/  */

import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-track-vehicle',
  templateUrl: './track-vehicle.component.html',
  styleUrls: ['./track-vehicle.component.css']
})
export class TrackVehicleComponent implements OnInit {
  
  @Input() vehicle: Vehicle; //Accepts vehicle object from the parent component to  display its details.
  constructor() { }

  ngOnInit() {
  }

}
