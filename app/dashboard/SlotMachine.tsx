'use client'
import Button from '~/components/Buttons/Button'

import { useSlotMachine } from './useReel';

const SlotMachine = ({ credits }: { credits: number }) => {
    const { loading, reels, spin } = useSlotMachine()

    return (
        <div className='mt-2'>
            <div
                className="mb-2 min-w-full min-h-full flex justify-around slotmachine-bg"
            >
                {reels.map((symbol, index) => (
                    <div
                        key={symbol + index}
                        className="h-full text-7xl content-center slotmachine-slot-bg"
                    >
                        {symbol}
                    </div>
                ))}
            </div>
            <Button disabled={credits === 0 || loading} onClick={spin} color="green">
                Spin
            </Button>
        </div>
    )
}

export default SlotMachine