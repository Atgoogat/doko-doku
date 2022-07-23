import { IdService } from './services/id.service'
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'doko-doku'
  constructor(private readonly idService: IdService) {
    console.log(this.idService.getUniqueId())
  }
}
