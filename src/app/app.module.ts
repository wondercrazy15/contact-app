import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EmailAddressesComponent } from './components/contacts/email-addresses/email-addresses.component';
import { ContactDetailComponent } from './components/contacts/contact-detail/contact-detail.component';
import { PhoneNumbersComponent } from './components/contacts/phone-numbers/phone-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    EmailAddressesComponent,
    ContactDetailComponent,
    PhoneNumbersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
