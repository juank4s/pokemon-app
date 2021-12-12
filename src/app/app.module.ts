import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ApiRestProvider } from 'src/providers/api-rest/api-rest';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/components/modal/modal.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
    CarouselModule

  ],
  providers: [ApiRestProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
