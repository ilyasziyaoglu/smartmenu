import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BaseModule} from './base/base.module';
import {MenuModule} from './menu/menu.module';
import {PagesModule} from './pages/pages.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        BaseModule,
        MenuModule,
        PagesModule,
        MatIconModule,
    ],
    providers: [
        {provide : LocationStrategy , useClass: HashLocationStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
