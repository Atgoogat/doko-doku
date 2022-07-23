import { ID_STORAGE } from './app.constants'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { DokoGameState } from './state/doko-game.state'
import { NavigationFrameComponent } from './site/navigation-frame/navigation-frame.component'
import { SiteModule } from './site/site.module'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin'
import { NgxsModule } from '@ngxs/store'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    NgxsModule.forRoot([DokoGameState]),
    NgxsStoragePluginModule.forRoot({
      key: [DokoGameState],
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      maxAge: 25,
      disabled: environment.production,
    }),
    BrowserAnimationsModule,
    SiteModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: ID_STORAGE,
      useValue: localStorage,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
