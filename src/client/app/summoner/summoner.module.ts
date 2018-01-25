import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummonerComponent } from './summoner.component';
import { SummonerRoutingModule } from './summoner-routing.module';
import { SummonerService } from '../shared/summoner/summoner.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SummonerRoutingModule, SharedModule],
  declarations: [SummonerComponent],
  exports: [SummonerComponent],
  providers: [SummonerService]
})
export class SummonerModule { }
