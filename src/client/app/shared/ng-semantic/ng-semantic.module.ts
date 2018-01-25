import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanticButtonComponent, SemanticButtonsComponent } from './button/button.component';
import { SemanticCardComponent, SemanticCardsComponent } from './card/card.component';
import { SemanticItemComponent } from './item/item.component';
import { SemanticMenuComponent } from './menu/menu.component';
import { SemanticSidebarComponent } from './sidebar/sidebar.component';
import { SemanticStatisticComponent, SemanticStatisticsComponent } from './statistic/statistic.component';
import { LodSummonerIconComponent } from './custom/summoner-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SemanticButtonComponent,
    SemanticButtonsComponent,
    SemanticCardComponent,
    SemanticCardsComponent,
    SemanticItemComponent,
    SemanticMenuComponent,
    SemanticSidebarComponent,
    SemanticStatisticComponent,
    SemanticStatisticsComponent,
    LodSummonerIconComponent
  ],
  exports: [
    SemanticButtonComponent,
    SemanticButtonsComponent,
    SemanticCardComponent,
    SemanticCardsComponent,
    SemanticItemComponent,
    SemanticMenuComponent,
    SemanticSidebarComponent,
    SemanticStatisticComponent,
    SemanticStatisticsComponent,
    LodSummonerIconComponent
  ]
})
export class NgSemanticModule {

}
