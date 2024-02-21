import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { ItemListComponent } from './cmps/item-list/item-list.component';
import { ItemPreviewComponent } from './cmps/item-preview/item-preview.component';
import { HeaderComponent } from './cmps/header/header.component';
import { LoadingComponent } from './cmps/loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteMsgComponent } from './cmps/delete-msg/delete-msg.component';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemPageComponent,
    ItemListComponent,
    ItemPreviewComponent,
    HeaderComponent,
    LoadingComponent,
    DeleteMsgComponent,
    ItemEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
