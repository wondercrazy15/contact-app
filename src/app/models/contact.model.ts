
export class ContactDetail
{
    id: number = 0
    userName: string = ''
    designation: string = ''
    imageUrl: string = ''
    isActive: boolean
}

export class UserDetail extends ContactDetail
{
    contactId:number
    bio: string = ''
    email: contactInfo[]=[]
    dial: string = ''
    meeting: string = ''
    phone: contactInfo[]=[]
}
export class contactInfo{
    value:any
    isPrimary:boolean
}

