import { PAGE_PER_ROW } from './../../shared/common';
import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { customerData } from 'src/app/models/data.model';
import { MIN_MOBILE_WINDOW_SIZE } from 'src/app/shared/common';
import { ContactDetail, UserDetail } from '../../models/contact.model';

import { ContactService } from '../../services/contact-service.service';

declare var window: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactsComponent implements OnInit {

  userList: ContactDetail[] = []
  userInfo: UserDetail
  isMobileView: boolean = false
  contactDetailModal: any
  totalDatalength: number = 0
  skip: number = 0
  take: number = 0
  pageNo: number = 0

  constructor(private contactService: ContactService) {
    this.totalDatalength = customerData.length
    this.skip = 0
    this.take = PAGE_PER_ROW
    this.pageNo = 0
  }

  ngOnInit(): void {
    this.getUserContact(this.skip, this.take)
  }

  ngAfterViewInit() {
    this.isMobileView = this.checkIsMobileView()
  }

  openFormModal() {
    this.contactDetailModal.show();
  }
  hideFormModal() {
    if(this.contactDetailModal)
      this.contactDetailModal.hide();
  }
  getPreviousRows() {
    this.userInfo = {} as UserDetail
    if (this.pageNo > 0) {
      this.getPageParamsWithResponse(true)
    }
  }
  getNextRows() {
    this.userInfo = {} as UserDetail
    this.getPageParamsWithResponse(false)
  }
  getUserContact(skip: number, take: number) {
    this.contactService.getContactData(skip, take).subscribe((res: any) => {
      this.userList = res;
      console.log(res);
    })
  }

  getUserContactDetail(contactDetail: ContactDetail) {
    this.contactService.getContactDetails(contactDetail.id).subscribe((res: any) => {
      const userInfoObj = res
      userInfoObj.userName = contactDetail.userName
      userInfoObj.designation = contactDetail.designation
      this.userInfo = userInfoObj
      if (this.isMobileView) {
        if (!this.contactDetailModal)
          this.contactDetailModal = new window.bootstrap.Modal(
            document.getElementById('myModal')
          );
        this.openFormModal()
      }
    })
  }

  @HostListener("window:resize", ['$event'])
  private onResize(event: any) {
    this.detectScreenSize(event);
  }
  private detectScreenSize(event: any) {
    this.isMobileView = event.target.innerWidth < MIN_MOBILE_WINDOW_SIZE
  }
  private checkIsMobileView() {
    const element = document.getElementsByClassName('contact-detail-container-mobile')
    if (element.length) {
      const { display } = window.getComputedStyle((element[0]), null)
      return display === "block"
    }
    return false
  }
  private getPageParamsWithResponse(isPrevious: boolean = false) {
    let fetchData = false
    let skipRows: number = 0
    let takeRows: number = 0
    let pageNo = 0
    if (isPrevious) {
      pageNo = this.pageNo - 1
      skipRows = (pageNo) * PAGE_PER_ROW
      takeRows = skipRows + PAGE_PER_ROW
      fetchData = true
    }
    else {
      if (!isPrevious) {
        pageNo = this.pageNo + 1
        skipRows = (pageNo) * PAGE_PER_ROW
        takeRows = skipRows + PAGE_PER_ROW
        if (skipRows <= this.totalDatalength) {
          fetchData = true
        }
      }
    }
    if(fetchData){
      this.pageNo = pageNo
      this.skip = skipRows
      this.take = takeRows
      this.getUserContact(this.skip,this.take)
    }
  }
}
