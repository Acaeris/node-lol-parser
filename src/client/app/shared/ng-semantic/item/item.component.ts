import {
  Component,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";

/**
 * Implementation of Semantic Item component
 */
 @Component({
   moduleId: module.id,
   changeDetection: ChangeDetectionStrategy.OnPush,
   selector: 'a[sm-item], sm-item',
   templateUrl: 'item.component.html',
   host: { 'class': 'item' }
 })
 export class SemanticItemComponent {
   @Input('icon') icon: string;
   @Input('header') header: string;
   @Input('image') image: string;
 }
