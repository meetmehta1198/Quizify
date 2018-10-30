import {Routes} from '@angular/router'
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './programming/programming.component';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { AddquestionsComponent } from './addquestions/addquestions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const appRoutes : Routes=[

    {path:'register',component:RegisterComponent},
    {path:'quiz',component:QuizComponent},
    {path:'result',component:ResultComponent},
    {path:'login',component:LoginComponent},
    {path:'bank',component:QuizComponent},
    {path:'home',component:HomeComponent},
    {path:'create',component:CreateQuizComponent},
    {path:'add',component:AddquestionsComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];