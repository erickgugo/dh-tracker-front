import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";
import {LoginComponent} from "./pages/public/login.component";
import {ActividadComponent} from "./pages/private/actividad.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: LoginComponent },
            {
                path: 'pages', component: AppLayoutComponent,
                children: [
                    { path: 'actividad', component: ActividadComponent }
                ]
            }
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
