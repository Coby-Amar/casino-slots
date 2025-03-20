declare interface UserModel {
    id: string
    createdAt: Date
    lastLogin: Date
    name: string
    email: string
    password: string
    balance: number
}

declare type UserDBModel = Omit<UserModel, 'createdAt' | 'lastLogin'> & {
    createdAt: string
    lastLogin: string
}