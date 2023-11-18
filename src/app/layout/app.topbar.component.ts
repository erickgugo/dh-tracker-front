import {Component, ElementRef, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LayoutService} from "./service/app.layout.service";
import {Router} from "@angular/router";
import {StorageService} from "../service/storage.service";
import {User} from "../model/User";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    display: boolean;
    user: User;

    constructor(public layoutService: LayoutService,
                private router: Router,
                private storageService: StorageService) {
    }

    ngOnInit(): void {
        this.user = this.storageService.getUser();
    }
    logout(): void {
        this.storageService.clean();
        this.router.navigate(['']);

    }
}
