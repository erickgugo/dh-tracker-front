import {Component, OnInit} from '@angular/core';
import {TrackerService} from "../../service/tracker.service";
import {Actividad} from "../../model/Actividad";


@Component({
    selector: 'app-actividad',
    templateUrl: './actividad.component.html'
})
export class ActividadComponent implements OnInit {

    actividades : Actividad[] = [];
    constructor(private trackerService: TrackerService) {

    }

    ngOnInit() {
        this.loadActividades();
    }

    loadActividades() {
        this.trackerService.getRest('')
            .subscribe({
                    next: (data) => {
                        this.actividades = data;
                        console.log(this.actividades.length);
                    },
                    error: (error: any) => {
                        console.log(error)
                    }
                }
            );
    }
}
