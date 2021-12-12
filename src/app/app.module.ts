import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ApiRestProvider } from 'src/providers/api-rest/api-rest';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [ApiRestProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
