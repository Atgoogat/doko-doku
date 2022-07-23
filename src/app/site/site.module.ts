import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationFrameComponent } from './navigation-frame/navigation-frame.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { GlobalFabDirective } from './directives/global-fab.directive'

@NgModule({
  declarations: [NavigationFrameComponent, GlobalFabDirective],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forChild([]),
  ],
  exports: [NavigationFrameComponent, GlobalFabDirective],
})
export class SiteModule {}
