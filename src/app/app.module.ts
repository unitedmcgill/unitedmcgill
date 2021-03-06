import { NgModule, APP_INITIALIZER }    from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { HttpClientModule }             from '@angular/common/http';
import { LocationStrategy,
         PathLocationStrategy }         from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { AppComponent }                 from './app.component';
// import { Ng2BootstrapModule }           from 'ng2-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES }      from './shared/nav-dropdown.directive';

// import { ChartsModule }                 from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES }    from './shared/sidebar.directive';
import { AsideToggleDirective }         from './shared/aside.directive';
import { BreadcrumbsComponent }         from './shared/breadcrumb.component';
import { LoaderService }                from './services/loader.service';

// Routing Module
import { AppRoutingModule }             from './app.routing';

//Layouts
import { FullLayoutComponent }          from './layouts/full-layout.component';

// My Components (Move to modules that need them...)
import { ConfigService }                from "./services/config.service";
import {AnalyticsService }              from "./services/analytics.service";

// Authentication
import { AuthGuard } from './shared/authguard';
import { AuthenticationService } from './services/auth.service';
import { LoginComponent } from './login/login.component';

// Init the config service
export function initConfig(config: ConfigService){
 return () => config.load() 
}

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        FullLayoutComponent,
        NAV_DROPDOWN_DIRECTIVES,
        BreadcrumbsComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        AsideToggleDirective,
        LoginComponent
    ],
    providers: [
        LoaderService,
        ConfigService,
        AnalyticsService,        
        AuthGuard,
        AuthenticationService,
        {
            provide: APP_INITIALIZER,
            useFactory: initConfig,
            deps: [ConfigService],
            multi: true},
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
