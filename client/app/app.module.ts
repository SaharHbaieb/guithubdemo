import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent, BoutiqueComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}