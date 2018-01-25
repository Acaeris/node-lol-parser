import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import { LocationService } from './services/location.service';
import './operators';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  pageTitle: string = "League Of Data";

  constructor(
    private locationService: LocationService
  ) {
    locationService.changeEmitted$.subscribe(text => {
      this.pageTitle = text;
    });
    console.log('Environment config', Config);
  }
}
