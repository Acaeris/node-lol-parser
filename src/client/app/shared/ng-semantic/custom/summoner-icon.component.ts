import {
  Component,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { Summoner } from '../../../models/summoner';

/**
 * Implementation of summoner icon custom element
 */
@Component({
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'lod-summoner-icon',
  templateUrl: 'summoner-icon.component.html',
  host: { 'class': 'ui image' }
})
export class LodSummonerIconComponent {
  @Input('summoner') summoner: Summoner;
}
