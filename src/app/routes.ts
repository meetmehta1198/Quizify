import {Routes} from '@angular/router'
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './programming/programming.component';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';
import { BankingComponent } from './banking/banking.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
export const appRoutes : Routes=[

    {path:'register',component:RegisterComponent},
    {path:'quiz',component:QuizComponent},
    {path:'result',component:ResultComponent},
    {path:'login',component:LoginComponent},
    {path:'bank',component:BankingComponent},
    {path:'home',component:HomeComponent},
    {path:'nav',component:NavbarComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];