import {NgModule} from '@angular/core';
import {CommonModule, DatePipe, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from './layout/app.layout.module';
import {NotfoundComponent} from './demo/components/notfound/notfound.component';
import {ProductService} from './demo/service/product.service';
import {CountryService} from './demo/service/country.service';
import {CustomerService} from './demo/service/customer.service';
import {EventService} from './demo/service/event.service';
import {IconService} from './demo/service/icon.service';
import {NodeService} from './demo/service/node.service';
import {PhotoService} from './demo/service/photo.service';
import {LoginComponent} from "./pages/public/login.component";
import {ButtonModule} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {RadioButtonModule} from "primeng/radiobutton";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {InputTextareaModule} from "primeng/inputtextarea";
import {StepsModule} from "primeng/steps";
import {FieldsetModule} from "primeng/fieldset";
import {MainComponent} from "./pages/private/main.component";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";
import {ToolbarModule} from "primeng/toolbar";
import {DialogModule} from "primeng/dialog";
import {ChartModule} from "primeng/chart";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {GMapModule} from "primeng/gmap";
import {GoogleMapsModule} from "@angular/google-maps";
import {MessagesModule} from "primeng/messages";
import {AuthService} from "./service/auth.service";
import {StorageService} from "./service/storage.service";
import {ActividadComponent} from "./pages/private/actividad.component";
import {TrackerService} from "./service/tracker.service";

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent,
        LoginComponent,
        MainComponent,
        ActividadComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        RadioButtonModule,
        DropdownModule,
        CalendarModule,
        InputTextareaModule,
        StepsModule,
        FieldsetModule,
        CheckboxModule,
        TableModule,
        RippleModule,
        ToolbarModule,
        DialogModule,
        ChartModule,
        ConfirmDialogModule,
        GMapModule,
        GoogleMapsModule,
        DatePipe,
        CommonModule,
        MessagesModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, ConfirmationService,
        AuthService, MessageService, StorageService, TrackerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
