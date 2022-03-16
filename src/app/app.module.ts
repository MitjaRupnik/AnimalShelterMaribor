
import { AnimalsService } from './animals.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PickerComponent } from './picker/picker.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { CostsComponent } from './costs/costs.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PickerComponent,
    ContactComponent,
    CostsComponent,
    ErrorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PickerComponent
      },
      {
        path: 'costs',
        component: CostsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ])
  ],
  providers: [AnimalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
