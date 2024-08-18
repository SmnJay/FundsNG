export interface ISignInForm {
    email: string
    password: string
}

export interface IProfileSettings {
    userId: string,
    email: string,
    firstName: string,
    lastName: string,
    mobile: string,
    gender: string,
    profilePictureUrl: string,
    dob: string,
    isActive: boolean
}

export interface ICompleteRegistration {
    userId?: string,
    firstName: string,
    lastName: string,
    bvn: string,
    gender: string,
    mobile: string,
    dob: string
}

export interface ICompleteProfile {
    firstName: string,
    lastName: string,
    gender: string,
    mobile: string,
}

export interface ICampaign {
    agreementSigned: boolean
    campaignCategoryId: string
    category: null | []
    country: string
    state: string
    mobile: string
    name: string
    targetAmount: number
    description: string
    id: string
    userId: string
    mediaUrl: string
    endDate: string

}

export interface ICampaignDetails {
    campaign: ICampaign
    donatedAmount: number,
    numberOfDonors: number,
    numberOfDonations: number,
    activities: any[]
}