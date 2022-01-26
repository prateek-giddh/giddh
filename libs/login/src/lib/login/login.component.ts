import { Component, OnDestroy } from '@angular/core';
import { BaseComponent } from '@giddh/base';

@Component({
    selector: 'giddh-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent implements OnDestroy {
    constructor() {
        super();
    }

    override ngOnDestroy(): void {
        super.ngOnDestroy();
    }
}
