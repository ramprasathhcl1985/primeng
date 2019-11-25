import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrimeNgComponent } from './prime-ng/prime-ng.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import {LightboxModule} from 'primeng/lightbox';
import {AccordionModule} from 'primeng/accordion';
import {TabMenuModule} from 'primeng/tabmenu';
import {RatingModule} from 'primeng/rating';
import {SliderModule} from 'primeng/slider';
import {CarouselModule} from 'primeng/carousel';
import {TreeTableModule} from 'primeng/treetable';
import {DataViewModule} from 'primeng/dataview';
import {CalendarModule} from 'primeng/calendar';
import {ChartModule} from 'primeng/chart';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/components/common/messageservice'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrimeNgComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropdownModule,
    LightboxModule,
    AccordionModule,
    TabMenuModule,
    RatingModule,
    SliderModule,
    CarouselModule,
    TreeTableModule,
    DataViewModule,
    CalendarModule,
    ChartModule,
    ToastModule
    
   
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
