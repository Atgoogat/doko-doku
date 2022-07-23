import { AppComponent } from './app.component'
import { NavigationFrameComponent } from './site/navigation-frame/navigation-frame.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
