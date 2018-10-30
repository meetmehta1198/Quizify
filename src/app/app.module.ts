import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ResultComponent } from './result/result.component';
import { QuizComponent } from './programming/programming.component';
import { appRoutes } from './routes';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { QuizService } from '../assets/quiz.service';
import { EnrollService } from '../assets/enroll.service';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { AddquestionsComponent } from './addquestions/addquestions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ResultComponent,
    QuizComponent,
    NavbarComponent,
    LoginComponent,
   
    HomeComponent,
    FooterComponent,
    CreateQuizComponent,
    AddquestionsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    //BrowserAnimationsModule
  ],
  providers: [QuizService,EnrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
