import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { SignIn } from './components/sign-in/sign-in';
import { SignUp } from './components/sign-up/sign-up';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: Home, canActivate: [authGuard] },
  { path: 'sign-in', component: SignIn },
  { path: 'sign-up', component: SignUp },
  { path: '**', component: NotFound },
];
