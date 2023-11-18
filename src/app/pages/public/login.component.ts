import {Component, OnInit} from '@angular/core';
import {LayoutService} from 'src/app/layout/service/app.layout.service';
import {AuthService} from "../../service/auth.service";
import {Message, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {StorageService} from "../../service/storage.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit {

    usuario!: string;
    password!: string;
    submitted: boolean;
    error: string;

    constructor(private layoutService: LayoutService,
                private authService: AuthService,
                private messageService: MessageService,
                private router: Router,
                private storageService: StorageService) {
    }

    ngOnInit(): void {
        if (this.storageService.isLoggedIn()) {
            this.router.navigate(['pages/actividad']);
        }
    }

    actionLogin() {
        console.log("actionLogin: " + this.usuario + " - " + this.password);
        this.submitted = true;
        this.messageService.clear();
        this.error = "";
        if (!this.usuario) {
            this.error = "El usuario es requerido."
        }
        if (!this.password) {
            if (this.error) {
                this.error = this.error + "\n";
            }
            this.error = this.error + "El password es requerido."
        }
        if (this.error) {
            this.messageService.add({severity: 'error', detail: this.error});
            return;
        }

        this.authService.autentication(this.usuario, this.password).subscribe({
            next: data => {
                console.log(data);
                this.storageService.saveUser(data);
                this.router.navigate(['/pages/actividad']);
            },
            error: err => {
                console.log(err)
                this.messageService.add({
                    severity: 'error',
                    summary: "Error",
                    detail: err
                });
            }
        }).add(() => {
            console.log("end...");
        });
    }

    validateData() {

    }


}
