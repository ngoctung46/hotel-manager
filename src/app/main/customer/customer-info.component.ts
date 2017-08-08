import { Component, OnInit, Output, EventEmitter, ViewChild, Injector } from '@angular/core';
import { RoomCardComponent } from '../room-card/room-card.component';
@Component({
    selector: 'app-customer-info',
    template: `
    <sm-modal title="Checked in Customer Info" icon="user circle outline" #infoModal>
        <modal-content>

            <a class="ui teal label ">
                Customer Name: 
            </a>
              <a class="ui orange label">
                Tung 
            </a>

        </modal-content>
        <modal-actions>
            <button class="ui blue button" (click)="hide()">Close</button>
        </modal-actions>
    </sm-modal>
    `,
})
export class CustomerInfoComponent implements OnInit {
    @ViewChild('infoModal') infoModal;
    customerId: string;
    parentComponent: RoomCardComponent;
    constructor(private injector: Injector) {
        this.parentComponent = injector.get(RoomCardComponent);
    }

    ngOnInit() {
    }

    show() {
        this.infoModal.show();
    }
    hide() {
        this.infoModal.hide();
    }
}
