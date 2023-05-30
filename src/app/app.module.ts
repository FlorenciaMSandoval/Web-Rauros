import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { RdiComponent } from './rdi/rdi.component';
import { IcaroComponent } from './icaro/icaro.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    WhoWeAreComponent,
    ProductsComponent,
    ServicesComponent,
    RdiComponent,
    IcaroComponent,
    ClientsComponent,
    ContactComponent,
    MultimediaComponent,
    HeaderMenuComponent,
    MainContainerComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule,SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
