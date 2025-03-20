'use server'

import { redirect, RedirectType } from "next/navigation";

import symbols from "~/dashboard/symbols.json";

import db from "~/db";
import { DASHBOARD } from "~/routes";
import { getSessionModel, updateSession } from "~/utils";

export async function topupAction(formData: FormData) {
    const amount = +(formData.get('amount') as string)

    const session = await getSessionModel()
    const user = await db.getUser(session.id)

    session.balance += amount
    user.balance += amount

    await updateSession(session)
    await db.updateUser(user)

    redirect(DASHBOARD, RedirectType.replace)
}

export async function cashinAction(formData: FormData) {
    const amount = +(formData.get('amount') as string)
    const session = await getSessionModel()
    const user = await db.getUser(session.id)

    user.balance -= amount
    session.balance = user.balance
    session.credits += amount
    await updateSession(session)
    await db.updateUser(user)

    redirect(DASHBOARD, RedirectType.replace)
}

export async function cashoutAction() {
    const session = await getSessionModel()
    const user = await db.getUser(session.id)

    user.balance += session.credits
    session.balance += session.credits
    session.credits = 0

    await db.updateUser(user)
    await updateSession(session)
}

export async function rollAction() {
    try {
        const session = await getSessionModel()
        if (!session.credits || session.credits < 1) {
            throw Error('Not enough credits')
        }
        session.credits -= 1
        const results = roll(session)
        if (results.isWinner) {
            session.credits += results.worth
        }
        await updateSession(session)
        return results
    } catch {
        throw Error('Failed to roll, please try again later')
    }
    function rollSlot() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
    function roll(session: SessionData) {
        let rollResult = [rollSlot(), rollSlot(), rollSlot()]
        const total = session.credits + session.balance
        const creditsBetween40And60AndShouldReroll = total >= 40 && total <= 60 && Math.random() < 0.3
        const creditsAbove60AndShouldReroll = total > 60 && Math.random() < 0.6
        if (new Set(rollResult).size === 1 && (creditsBetween40And60AndShouldReroll || creditsAbove60AndShouldReroll)) {
            rollResult = rollResult.map(rollSlot)
        }
        const isWinner = new Set(rollResult).size === 1
        return {
            isWinner,
            results: rollResult,
            worth: isWinner ? (symbols.findIndex((symbol) => symbol == rollResult[0]) + 1) * 10 : 0
        }
    }
}
