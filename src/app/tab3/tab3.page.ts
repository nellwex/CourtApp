import { Component, ViewChild, ElementRef } from '@angular/core';
import { GoogleMap, MapType } from '@capacitor/google-maps';
import { Geolocation, Position } from '@capacitor/geolocation';
import { environment } from 'src/environments/environment';
import { __await } from 'tslib';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  @ViewChild('map')
  mapRef: ElementRef;
  map: GoogleMap;
  postioin: Position;
  marker: string;
  showingcLocation: boolean = true;


  constructor() { }

  ionViewDidEnter() {
    this.createMap();
    this.locateUser();

  }

  async locateMe(){
    await this.map.enableCurrentLocation(true);
  }
  
  async createMap() {

    this.map = await GoogleMap.create({
      id: 'Map',
      element: this.mapRef.nativeElement,
      apiKey: environment.mapsKey,
      config: {
        center: {
          lat: 24.180827560886996, 
          lng: 120.6468631114604,
        },
        zoom: 16,
      },
      forceCreate: true,
    });
    await this.addMarkers(this.postioin.coords.latitude, this.postioin.coords.longitude)

  }

  async addMarkers(lat,lng) {
    
    await this.map.addMarkers([
      {
        coordinate:{
          lat:lat,
          lng:lng,
        },
        draggable: true
      },
      {
        coordinate:{
          lat: this.postioin.coords.latitude,
          lng: this.postioin.coords.longitude,
        },
        draggable: true
      },
    ]);

  }

  async locateUser() {

    const coordinate = await Geolocation.getCurrentPosition();
this.postioin = coordinate;

  }



}
