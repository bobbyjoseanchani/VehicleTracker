import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginService } from './login.service';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleService } from './vehicle.service';
import { TrackVehicleComponent } from './track-vehicle/track-vehicle.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VehiclesComponent,
    TrackVehicleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
