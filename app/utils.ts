import { cookies } from "next/headers"
import { getIronSession } from "iron-session"

import { SessionModel } from "./models"
import { SESSION_OPTIONS } from "./env"

export async function getSessionModel() {
    const session = await getIronSession<SessionModel>(await cookies(), SESSION_OPTIONS)
    return SessionModel.orEmpty(session)
}

export async function isSessionLoggedin() {
    const session = await getSessionModel()
    return !!session.id
}

export async function updateSession(session: SessionModel) {
    const ironSession = await getIronSession<SessionModel>(await cookies(), SESSION_OPTIONS)
    if (session.id) {
        ironSession.id = session.id
    }
    if (session.name) {
        ironSession.name = session.name
    }
    if (session.balance > -1) {
        ironSession.balance = session.balance
    }
    if (session.credits > -1) {
        ironSession.credits = session.credits
    }
    await ironSession.save()
}

export async function destroySession() {
    const ironSession = await getIronSession<SessionModel>(await cookies(), SESSION_OPTIONS)
    ironSession.destroy()
}
