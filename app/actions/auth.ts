'use server'

import { compare, hash } from 'bcrypt'
import { redirect, RedirectType } from 'next/navigation';

import db from "~/db";
import { SessionModel } from '~/models';
import { DASHBOARD, LOGIN } from '~/routes';
import { destroySession, getSessionModel, updateSession } from '~/utils';

export async function registerAction(formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    try {
        const user = await db.createUser({
            username,
            password: await hash(password, 10)
        })
        await updateSession({
            ...SessionModel.fromUser(user),
            credits: 10
        })
        redirect(DASHBOARD, RedirectType.replace)
    } catch {
        return 'Username/Password incorrect or in use'
    }
}

export async function loginAction(formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    const user = await db.getUserByUsername(username)
    const valid = await compare(password, user.password)
    if (!valid) {
        return 'Username/Password incorrect'
    }
    console.log('user: ', user)
    const session = SessionModel.fromUser(user)
    console.log('session: ', session)
    await updateSession({
        ...session,
        credits: 10
    })
    redirect(DASHBOARD, RedirectType.replace)
}


export async function logoutAction() {
    const { id, credits } = await getSessionModel()
    const user = await db.getUser(id)
    user.balance += credits
    await db.updateUser(user)
    await destroySession()
    redirect(LOGIN, RedirectType.replace)
}
