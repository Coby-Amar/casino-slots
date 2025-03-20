declare type LoginRegisterData = Pick<UserModel, 'password'> & {
    username: string
}