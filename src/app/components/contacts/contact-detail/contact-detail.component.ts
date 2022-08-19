import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { UserDetail } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactDetailComponent implements OnInit {
  @Input() userInfo:UserDetail
  constructor() { }

  ngOnInit(): void {
  }

}
