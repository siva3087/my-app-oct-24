import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ReactangleComponent } from './reactangle/reactangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { LogoutComponent } from './logout/logout.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { EmpolyeesComponent } from './empolyees/empolyees.component';
import { EmployeeComponent } from './employee/employee.component';
import { StoreComponent } from './store/store.component';
import { VechileComponent } from './vechile/vechile.component';
import { HttpClientModule } from '@angular/common/http';
import { BankComponent } from './bank/bank.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { WeatherComponent } from './weather/weather.component';
import { PhotosComponent } from './photos/photos.component';
import { ApplicationComponent } from './application/application.component';
import { MovieComponent } from './movie/movie.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { StudentComponent } from './student/student.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateuserComponent } from './createuser/createuser.component';
import { MarksComponent } from './marks/marks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DatabindingComponent,
    CalculatorComponent,
    ReactangleComponent,
    CircleComponent,
    BMIComponent,
    LogoutComponent,
    DirectivesComponent,
    EventregistrationComponent,
    EmpolyeesComponent,
    EmployeeComponent,
    StoreComponent,
    VechileComponent,
    BankComponent,
    FlipkartComponent,
    MailComponent,
    WeatherComponent,
    PhotosComponent,
    ApplicationComponent,
    MovieComponent,
    PokemonComponent,
    CreatevehicleComponent,
    StudentComponent,
    HobbiesComponent,
    VehicleDetailsComponent,
    CreatestudentComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    CreateuserComponent,
    MarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
