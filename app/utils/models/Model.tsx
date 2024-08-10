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