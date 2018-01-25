import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Stat } from '../../../models/stat';

/**
 * Implementation of Semantic Statistc component
 *
 * @link http://semantic-ui.com/views/statistic.html
 */
@Component({
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-statistic',
  templateUrl: 'statistic.component.html',
  host: { 'class': 'ui statistic' }
})
export class SemanticStatisticComponent {
  @Input('stat') stat: Stat;
  @Input('value-first') valueFirst: boolean;
}

/**
 * Implementation of Semantic Statistics collection
 *
 * @link http://semantic-ui.com/views/statistic.html
 */
@Component({
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-statistics',
  template: '<ng-content></ng-content>',
  host: { 'class': 'ui statistics' }
})
export class SemanticStatisticsComponent {

}
