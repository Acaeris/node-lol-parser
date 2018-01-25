import { Component } from '@angular/core';
import { LocationService } from '../services/location.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'lol-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {

  /**
   * Creates an instance of the HomeComponent
   */
  constructor(private locationService: LocationService) {
    locationService.emitChange('League of Data');
  }
}
