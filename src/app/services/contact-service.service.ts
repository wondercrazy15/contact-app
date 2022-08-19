import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactDetail, UserDetail } from '../models/contact.model';
import { customerData,contactDetail } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContactData(skip:number,take:number): Observable<ContactDetail> {
    const responseObservable = new Observable(observer => {
      setTimeout(() => {
        const data = [...customerData]
        const result = data.splice(skip,take)
        observer.next(result);
      }, 500);
    });
    return responseObservable as Observable<ContactDetail>;
  }
  getContactDetails(contactId:number): Observable<UserDetail> {
    const responseObservable = new Observable(observer => {
      setTimeout(() => {
        const contactDetailIndex = contactDetail.findIndex(x=>x.contactId === contactId)
        if(contactDetailIndex >= 0)
          observer.next(contactDetail[contactDetailIndex]);
        else
        observer.next({});
      }, 500);
    });
    return responseObservable as Observable<UserDetail>;
  }
}
