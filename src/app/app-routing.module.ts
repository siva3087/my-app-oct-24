import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { EmpolyeesComponent } from './empolyees/empolyees.component';
import { EmployeeComponent } from './employee/employee.component';
import { StoreComponent } from './store/store.component';
import { VechileComponent } from './vechile/vechile.component';
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

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent,children:[
    {path:'home', component:HomeComponent},
    {path:'welcome', component:WelcomeComponent},
    {path:'databinding', component:DatabindingComponent},
    {path:'createvehicle', component:CreatevehicleComponent},
    {path:'eventregistration', component:EventregistrationComponent},
    {path:'empolyees', component:EmpolyeesComponent},
    {path:'mail', component:MailComponent},
    {path:'employee', component:EmployeeComponent},
    {path:'flipkart', component:FlipkartComponent},
    {path:'weather',component:WeatherComponent},
    {path:'store', component:StoreComponent},
    {path:'student', component:StudentComponent},
    {path:'photos', component:PhotosComponent},
    {path:'movie', component:MovieComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'reactangle', component:ReactangleComponent},
    {path:'pokemon', component:PokemonComponent},
    {path:'vechile', component:VechileComponent},
    {path:'bank', component:BankComponent},
    {path:'application', component:ApplicationComponent},
    {path:'circle', component:CircleComponent},
    {path:'bmi', component:BMIComponent},
    {path:'logout', component:LogoutComponent}

  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
