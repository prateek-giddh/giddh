import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('@giddh/login').then(loginModule => loginModule.LoginModule) }
];
