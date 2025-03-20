declare type SessionData = Pick<UserModel, 'id' | 'name' | 'balance'> & {
    credits: number
}