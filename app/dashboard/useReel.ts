'use client'
import { useCallback, useRef, useState } from "react"
import symbols from "./symbols.json"
import { rollAction } from "~/actions/dashboard"
import { useRouter } from "next/navigation"
import { DASHBOARD } from "~/routes"

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function getRandomRoll(amount = 3) {
    const roll = []
    for (let index = 0; index < amount; index++) {
        roll.push(getRandomSymbol())
    }
    return roll
}

export const useSlotMachine = () => {
    const router = useRouter()
    const [reels, setReels] = useState(getRandomRoll())
    const [isSpinning, setIsSpinning] = useState(false)
    const animationFrameRef = useRef<NodeJS.Timeout | null>(null)

    const run = useCallback(async () => {
        animationFrameRef.current = setInterval(() => setReels(getRandomRoll()), 200)
        const { isWinner, results, worth } = await rollAction()
        setReels(results)
        if (animationFrameRef.current) {
            clearInterval(animationFrameRef.current)
        }
        router.push(DASHBOARD + "?" + (isWinner ? 'won=' + worth : 'lost=true'))
    }, [router])

    return {
        reels,
        loading: isSpinning,
        async spin() {
            setIsSpinning(true)
            await run()
            setIsSpinning(false)
        },
    }
}