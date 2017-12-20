import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles:Vehicle[];
  selectedVehicle: Vehicle;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getVehicle().subscribe(
      myVehicles=> {
        this.vehicles = myVehicles;    
      }
    );
  }

  trackVehicle(myVehicle: Vehicle): void{
    this.selectedVehicle = myVehicle;
  }
}
