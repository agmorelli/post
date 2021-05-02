import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FormPostComponent } from './components/form-post/form-post.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommentsComponent } from './components/comments/comments.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  entryComponents: [
    FormPostComponent,
    CommentsComponent
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    FormPostComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    MatProgressSpinnerModule,
    NgxPaginationModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
