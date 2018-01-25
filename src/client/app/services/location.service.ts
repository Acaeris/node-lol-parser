import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LocationService {
  // Observale string sources
  private emitChangeSource = new Subject<any>();
  // Observale string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  // service message commands
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }
}
