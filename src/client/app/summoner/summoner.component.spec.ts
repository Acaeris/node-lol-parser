import { Component, OnInit } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { SummonerModule } from './summoner.module';
import { SummonerComponent } from './summoner.component';
import { SummonerService } from '../shared/summoner/summoner.service';

export function main() {
  describe('Summoner component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [SummonerComponent],
        imports: [],
        providers: [
          { provide: SummonerService, useValue: new MockSummonerService() }
        ]
      });
    });

    it(
      'should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            const fixture = TestBed.createComponent(SummonerComponent);
            const summonerInstance = fixture.debugElement.componentInstance;
            const summonerDOMEl = fixture.debugElement.children[0].nativeElement;
            const mockSummonerService = fixture.debugElement.injector.get<any>(SummonerService) as MockSummonerService;
            const summonerServiceSpy = spyOn(mockSummonerService, 'get').and.callThrough();

            mockSummonerService.returnValue = ['Acaeris', 'Kiwi', 'Miri'];

            fixture.detectChanges();

            expect(summonerInstance.summonerService).toEqual(jasmine.any(MockSummonerService));
            expect(summonerDOMEl.querySelectorAll('li').length).toEqual(3);
            expect(summonerServiceSpy.calls.count()).toBe(1);

            expect(summonerDOMEl.querySelectorAll('h2')[0].textContent).toEqual(
              'Summoner Details'
            );
          });
      })
    );
  });
}

class MockSummonerService {
  returnValue: string[];

  get(): Observable<string[]> {
    return Observable.create((observer: any) => {
      observer.next(this.returnValue);
      observer.complete();
    });
  }
}
