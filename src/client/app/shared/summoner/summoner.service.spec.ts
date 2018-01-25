import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SummonerService } from './summoner.service';

import { Observable } from 'rxjs/Observable';

export function main() {
  describe('Summoner Service', () => {
    let summonerService: SummonerService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [SummonerService]
      });

      summonerService = TestBed.get(SummonerService);
      httpMock = TestBed.get(HttpTestingController);
    });

    it('should return an Observable when get called', async(() => {
      expect(TestBed.get(SummonerService).get()).toEqual(jasmine.any(Observable));
    }));

    it('should resolve to list of names when get called', async(() => {
      const expectedSummoners = [
        'Acaeris',
        'Kiwi',
        'Miri'
      ];

      let actualSummoners: string[] = [];
      summonerService.get().subscribe((summoners: string[]) => {
        actualSummoners = summoners;
      });

      httpMock.expectOne('assets/summoners.json').flush(expectedSummoners);

      expect(actualSummoners).toEqual(expectedSummoners);
    }));
  });
}
