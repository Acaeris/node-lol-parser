import { Component, QueryList, AfterViewInit, ElementRef, Input,
  ContentChildren, ViewChild } from '@angular/core';

declare var jQuery: any;

/**
 * Implementation of Tab component
 *
 * @link http://semantic-ui.com/modules/tab.html
 */
@Component({
  moduleId: module.id,
  selector: "sm-tab",
  templateUrl: "tab.component.html",
  host: { 'class': 'ui tab' }
})
export class SemanticTabComponent implements AfterViewInit {
  @Input() tab: number;
  @Input() title: string;
  @Input() active: boolean;
  @ViewChild("tab") tabEl: ElementRef;

  ngAfterViewInit() {
    if (this.active) {
      this.tabEl.nativeElement.parentElemnt.classList.add("active");
    }
  }
}

/**
 * Implementation of Tabs collection
 *
 * @link http://semantic-ui.com/modules/tab.html
 */
