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
    status: string
    name: string
    targetAmount: number
    description: string
    createdBy: string
    id: string
    donatedAmount: number
    email: string
    userId: string
    mediaUrl: string
    endDate: string
    shareableUrl: string,
    bankDetails: {
        bankName: string,
        accountNumber: string,
        accountName: string
    }
}

export interface ICampaignDetails {
    campaign: ICampaign
    donatedAmount: number,
    numberOfDonors: number,
    numberOfDonations: number,
    activities: any[],
    bankDetails: {
        bankName: string,
        accountNumber: string,
        accountName: string
    }
}

export interface ICreateSavings {
    title: string
    reason: string
    targetAmount: string
    amountPerSave: string
    type: string
    startDate: string
    endDate: string
    deductionDate: string
    deductionTime: string
    paymentSource: string
    frequency: string
    // participants: string[]
}