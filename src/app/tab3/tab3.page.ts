import { Component,ViewChild, ElementRef } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  
  @ViewChild('map')
  mapRef: ElementRef;
  map: GoogleMap;

  constructor() {}

  ionViewDidEnter(){
this.createMap();

  }
  
  async createMap() {
    this.map = await GoogleMap.create({
      id: 'Map',
      element: this.mapRef.nativeElement,
      apiKey: environment.mapsKey,
      config: {
        center: {
          lat: 24.17997, 
          lng: 120.649,
        },
        zoom: 16,
      },
    });
  }
}
