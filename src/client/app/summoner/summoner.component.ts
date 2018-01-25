import { Component, OnInit } from '@angular/core';
import { SummonerService } from '../shared/summoner/summoner.service';
import { LocationService } from '../services/location.service';

/**
 * This class represents the lazy loaded SummonerComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'lol-summoner',
  templateUrl: 'summoner.component.html',
  styleUrls: ['summoner.component.css']
})
export class SummonerComponent implements OnInit {
  names: any[] = [];
  errorMessage: string;
  summoner: any = {
    summonerLevel: 30,
    profileIconId: 1,
    name: "Acaeris"
  };

  /**
   * Creates an instance of the SummonerComponent with the injected
   * SummonerService
   *
   * @param {SummonerService} summonerService - The injected SummonerService.
   * @param {LocationService} locationService - The injected LocationService.
   */
  constructor(
    public summonerService: SummonerService,
    private locationService: LocationService
  ) {
    locationService.emitChange('League of Data: Summoner Info');
  }

  /**
   * Get the names OnInit and update the title
   */
  ngOnInit() {
    this.getNames();
  }

  /**
   * Handle the summonerService observable
   */
  getNames() {
    this.summonerService.get()
      .subscribe(
        names => this.names = names,
        error => this.errorMessage = <any>error
      );
  }
}
