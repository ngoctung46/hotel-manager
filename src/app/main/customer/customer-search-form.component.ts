import { Component, OnInit, Input, ViewChild, } from '@angular/core';
import { RoomCardComponent } from '../room-card/room-card.component';
@Component({
    selector: 'app-customer-search-form',
    template: `
    <sm-modal title="Nhận Khách" icon="user circle outline" #searchModal>
        <modal-content>
            <form class="ui form">
            <div class="field">
                <label>Nhập mã số:</label>
                <input type="text" name="customerId" id="customerId" placeholder="Mã Số giấy tờ của khách ...." [(ngModel)]="customerId">
            </div>
            </form>
        </modal-content>
        <modal-actions>
            <button type="submit" class="ui button primary" 
                    [class.disabled]="customerId==''" 
                    (click)="hide();"
                    [routerLink]="['/customer-check-in', customerId, roomId]" skipLocationChange>Tìm</button>
        </modal-actions>
    </sm-modal>
    `,
})
export class CustomerSearchFormComponent implements OnInit {
    @Input() roomId = '';
    @ViewChild('searchModal') searchModal;
    customerId: string;
    constructor() {
    }
    ngOnInit() {
    }
    show() {
        this.searchModal.show();
    }
    hide() {
        this.searchModal.hide();
    }
}
