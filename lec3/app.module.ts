import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { TestPipePipe } from './pipes/test-pipe.pipe';
import { TestDerectiveDirective } from './test-derective.directive';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { SearchComponent } from './components/search/search.component';
import { RegistrationUserComponent } from './components/registration-user/registration-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegistrationHouseComponent } from './components/registration-house/registration-house.component';
import { AllHousesComponent } from './components/all-houses/all-houses.component';
import { CurrencyPipe } from './pipes/currency.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TestPipePipe,
    TestDerectiveDirective,
    AllUsersComponent,
    SearchComponent,
    RegistrationUserComponent,
    LoginUserComponent,
    RegistrationHouseComponent,
    AllHousesComponent,
    CurrencyPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
