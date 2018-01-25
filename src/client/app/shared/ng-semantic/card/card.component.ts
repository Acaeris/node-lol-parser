import {
  Component,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";

/**
 * Implementation of Card component
 *
 * @link http://semantic-ui.com/views/card.html
 */
@Component({
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-card',
  templateUrl: 'card.component.html',
  host: { 'class': 'ui card' }
})
export class SemanticCardComponent {
  @Input('image') image: string;
}

/**
 * Implementation of Cards collection
 *
 * @link http://semantic-ui.com/views/card.html
 */
@Component({
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-cards',
  templateUrl: 'cards.component.html'
})
export class SemanticCardsComponent {
  @Input('class') class: string;
}
