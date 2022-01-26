import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    template: '',
})
export class BaseComponent implements OnDestroy {
    private _destroy$: Subject<boolean>;

    constructor() {
        this._destroy$ = new Subject();
    }

    get destroy$() {
        return this._destroy$;
    }

    ngOnDestroy() {
        if (this._destroy$) {
            this._destroy$.next(true);
            this._destroy$.complete();
        }
    }
}
