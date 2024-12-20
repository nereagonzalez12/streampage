import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommandsComponent } from './pages/home/commands/commands.component';
import { ExtensibleComponent } from './pages/home/extensible/extensible.component';
import { HomeComponent } from './pages/home/home.component';
import { StreamComponent } from './pages/home/stream/stream.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ExtensibleComponent,
    CommandsComponent,
    HomeComponent,
    StreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
