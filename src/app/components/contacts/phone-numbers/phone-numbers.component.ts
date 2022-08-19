import { Component, Input, OnInit } from '@angular/core';
import { contactInfo } from 'src/app/models/contact.model';

@Component({
  selector: 'app-phone-numbers',
  templateUrl: './phone-numbers.component.html',
  styleUrls: ['./phone-numbers.component.sass']
})
export class PhoneNumbersComponent implements OnInit {
  @Input() userPhoneNumbers: contactInfo[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
