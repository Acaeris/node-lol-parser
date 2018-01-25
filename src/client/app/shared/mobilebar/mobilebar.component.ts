import { Component, Input } from '@angular/core';

/**
 * This class represents the mobile menu bar
 */
@Component({
  moduleId: module.id,
  selector: 'lol-mobilebar',
  templateUrl: 'mobilebar.component.html'
})
export class MobilebarComponent {
  @Input() pageTitle: string;
}
