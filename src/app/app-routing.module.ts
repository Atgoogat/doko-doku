import { AppComponent } from './app.component'
import { NavigationFrameComponent } from './site/navigation-frame/navigation-frame.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'doko',
    loadChildren: () => import('./doko/doko.module').then((m) => m.DokoModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
