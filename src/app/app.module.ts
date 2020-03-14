import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/widget/header/header.component';
import { ContentMainComponent } from './components/widget/content-main/content-main.component';
import { FooterComponent } from './components/widget/footer/footer.component';
import { HoursComponent } from './components/widget/content-main/hours/hours.component';
import { ExpensesComponent } from './components/widget/content-main/expenses/expenses.component';
import { HoursAdditionalComponent } from './components/widget/content-main/hours-additional/hours-additional.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WidgetDataService } from './services/widget-data.service';
import { HttpClientModule } from '@angular/common/http';
import { WidgetComponent } from './components/widget/widget.component';
import { CalendarComponent } from './components/widget/header/calendar/calendar.component';
import { MatIconModule } from "@angular/material/icon";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentMainComponent,
    FooterComponent,
    HoursComponent,
    ExpensesComponent,
    HoursAdditionalComponent,
    WidgetComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(WidgetDataService, { dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
