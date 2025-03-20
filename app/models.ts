export class SessionModel implements SessionData {
    public id: string
    public name: string
    public balance: number
    public credits: number
    constructor({ credits, id, name, balance }: SessionData) {
        this.id = id
        this.name = name
        this.balance = balance
        this.credits = credits
    }

    static fromUser(user: User) {
        return new SessionModel({
            ...user,
            credits: 10
        })
    }

    static orEmpty(session?: SessionModel) {
        if (!session) {
            return new SessionModel({
                id: '',
                name: '',
                balance: 0,
                credits: 0
            })
        }
        return session
    }

}
export class User implements UserModel {
    public id: string
    public name: string
    public email: string
    public password: string
    public balance: number
    public createdAt: Date
    public lastLogin: Date

    constructor({ id, name, email, password, balance, createdAt, lastLogin }: UserModel) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.balance = balance
        this.createdAt = createdAt
        this.lastLogin = lastLogin
    }

    static fromModel(model: UserModel) {
        return new User(model)
    }

    static fromJson(dBModel: UserDBModel) {
        return new User({
            ...dBModel,
            createdAt: new Date(Date.parse(dBModel.createdAt)),
            lastLogin: new Date(Date.parse(dBModel.lastLogin))
        })
    }

    toJson(): UserDBModel {
        return {
            ...this,
            createdAt: this.createdAt.toUTCString(),
            lastLogin: this.lastLogin.toUTCString(),
        }
    }

}
