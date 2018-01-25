import {
  Component,
  Input,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";

/**
 * Implementation of Semantic Menu component
 *
 * @link http://semantic-ui.com/collections/menu.html
 */
@Component({
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-menu',
  templateUrl: 'menu.component.html',
  host: { 'class': 'ui menu' }
})
export class SemanticMenuComponent implements AfterViewInit {
  @Input('logo') logo: string;
  @Input('logoClass') logoClass: string = 'logo';
  @Input('title') title: string;
  @ViewChild('innerElement') innerElement: ElementRef;

  ngAfterViewInit() {
    Array.from(this.innerElement.nativeElement.parentElement.childNodes)
      .filter((element: Element) => element.nodeName === 'SM-MENU')
      .map((element: Element) => element.firstElementChild.classList.remove('ui'));
  }
}
