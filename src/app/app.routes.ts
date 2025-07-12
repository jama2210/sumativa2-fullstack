import { Routes } from '@angular/router';
import { header } from './components/header/header';
import { home } from './pages/home/home';
import { register } from './pages/register/register';
import { login } from './pages/login/login';
import { Profile } from './pages/profile/profile';
import { ForgotPassword } from './pages/forgot-password/forgot-password';
import { authGuard } from './guards/auth.guard';
//Creacion e importacion de rutas

export const routes: Routes = [
    {
        path: '', component: home,
    },
    {
        path: 'register', component: register
    },
    {
        path: 'login', component: login
    },
    {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile').then(m => m.Profile),
        canActivate: [authGuard] // protege el perfil para usuarios logueados
    },
    {
        path: 'forgot-password', component: ForgotPassword
    }
];
