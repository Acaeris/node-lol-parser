import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
  Renderer
} from "@angular/core";

declare var jQuery: any;

// Fix Sidebar location before run.
jQuery.fn.fixSidebar = function () {
  let allModules = jQuery(this);

  allModules
    .each(function () {
      let selector = { pusher: '.pusher' };
      let module = jQuery(this);
      let context = jQuery('body');

      if (module.nextAll(selector.pusher).length === 0) {
        module.detach().prependTo(context);
      }
    });

  return this;
};

/**
 * Implements the Semantic Sidebar component
 */
@Component({
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-sidebar',
  templateUrl: 'sidebar.component.html'
})
export class SemanticSidebarComponent implements OnInit, OnDestroy {
  @Input() class: string;
  @ViewChild('sidebar') sidebar: ElementRef;

  constructor(public renderer: Renderer) {}

  show(options?: {}) {
    jQuery(this.sidebar.nativeElement)
      .sidebar(options || {})
      .sidebar('toggle');
  }

  hide() {
    jQuery(this.sidebar.nativeElement)
      .sidebar('hide');
  }

  ngOnInit(): void {
    jQuery(this.sidebar.nativeElement)
      .fixSidebar();
  }

  ngOnDestroy(): void {
    this.renderer.detachView([this.sidebar.nativeElement]);
  }
}
