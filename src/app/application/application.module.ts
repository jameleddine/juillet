import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application/application.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjoutComponent } from './ajout/ajout.component';
import { GestionComponent } from './gestion/gestion.component';
import { PocComponent } from './poc/poc.component';
import { ApplicationRoutingModule } from './application-routing.module';

import {HttpClientModule,HttpClient} from '@angular/common/http'
// import { CrudService } from './services/crud.service';

import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}


@NgModule({
  declarations: [ApplicationComponent, NavbarComponent, SidebarComponent, FooterComponent, ContainerComponent, SearchPipe, DashboardComponent, AjoutComponent, GestionComponent, PocComponent],
  imports: [
    CommonModule,
    FormsModule,
    ApplicationRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

  ],
  exports:[ApplicationComponent],
  // providers:[CrudService]
})
export class ApplicationModule { }
