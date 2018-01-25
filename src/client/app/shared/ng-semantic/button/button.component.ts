import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  HostBinding
} from "@angular/core";

/**
 * Implementation of Button component
 *
 * @link http://semantic-ui.com/elements/button.html
 */
@Component({
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'a[sm-button], sm-button',
  templateUrl: 'button.component.html',
  host: { 'class': 'ui button' }
})
export class SemanticButtonComponent implements OnInit {
  @Input('icon') icon: string;
  @Input('disabled') disabled: boolean = false;
  @HostBinding('class.icon') classIcon: boolean = false;
  @HostBinding('class.disabled') classDisabled: boolean = false;

  ngOnInit() {
    this.classDisabled = this.disabled;
    if ("" !== this.icon) {
      this.classIcon = true;
    }
  }
}

/**
 * Implementation of Buttons collection
 *
 * @link http://semantic-ui.com/elements/button.html
 */
@Component({
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'div[sm-buttons], sm-buttons',
  templateUrl: 'buttons.component.html',
  host: { 'class': 'ui buttons' }
})
export class SemanticButtonsComponent {
}
