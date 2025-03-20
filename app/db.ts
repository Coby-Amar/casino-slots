import { JsonDB, Config } from 'node-json-db'
import { v4 } from 'uuid';

import { User } from './models';

class JsonDBService {
    private db = new JsonDB(new Config("casino_jackpot_db", true, false, '/', true));

    public async getUser(id: string): Promise<User> {
        const user: UserDBModel = await this.db.getData(`/${id}`)
        if (!user) {
            throw Error()
        }
        return User.fromJson(user)
    }

    public async getUserByUsername(username: string): Promise<User> {
        const users = await this.db.getData('/')
        const found = Object.values<UserDBModel>(users).find(value => value.email === username)
        if (!found) {
            throw Error()
        }
        return User.fromJson(found)
    }

    public async createUser({ username, password }: LoginRegisterData): Promise<User> {
        const users = await this.db.getData('/')
        const found = Object.values<UserDBModel>(users).find(value => value.email === username)
        if (found) {
            throw Error()
        }
        const user = new User({
            id: v4(),
            balance: 0,
            email: username,
            name: username.split('@')[0],
            password,
            createdAt: new Date(),
            lastLogin: new Date()
        })
        await this.db.push(`/${user.id}`, user.toJson())
        return user
    }

    public async updateUser(user: User): Promise<void> {
        return this.db.push(`/${user.id}`, user.toJson())
    }
}
const db = new JsonDBService()

export default db 