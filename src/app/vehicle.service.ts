import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { VEHICLES } from './vehicles/mock-vehicles';
import { Vehicle } from './vehicle';

@Injectable()
export class VehicleService {

  constructor() { }

  /** Returns a list of vehicles obtained from the mock data */
  getVehicle(): Observable<Vehicle[]>{
    return of(VEHICLES);
  }

}
