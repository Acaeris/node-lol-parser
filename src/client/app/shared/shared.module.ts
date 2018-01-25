import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSemanticModule } from './ng-semantic/ng-semantic.module';

import { NavbarComponent } from './navbar/navbar.component';
import { MobilebarComponent } from './mobilebar/mobilebar.component';
import { FooterComponent } from './footer/footer.component';
import { SummonerService } from './summoner/summoner.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, NgSemanticModule],
  declarations: [
    NavbarComponent,
    MobilebarComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    MobilebarComponent,
    FooterComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    NgSemanticModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        SummonerService
      ]
    };
  }
}
