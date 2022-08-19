import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { contactInfo } from 'src/app/models/contact.model';

@Component({
  selector: 'app-email-addresses',
  templateUrl: './email-addresses.component.html',
  styleUrls: ['./email-addresses.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class EmailAddressesComponent implements OnInit {
  @Input() emails:contactInfo[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
