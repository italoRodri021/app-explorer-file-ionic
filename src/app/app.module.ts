import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [
    PreviewAnyFile,
    { provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
