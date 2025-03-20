import TopUpModal from "./modals/TopUpModal";
import CashInModal from "./modals/CashInModal";

import SlotMachine from "./SlotMachine";
import { getSessionModel } from "~/utils";
import ButtonLink from "~/components/Buttons/ButtonLink";
import { DASHBOARD } from "~/routes";
import { cashoutAction } from "~/actions/dashboard";
import Button from "~/components/Buttons/Button";
import LoseModal from "./modals/LoseModal";
import WonModal from "./modals/WonModal";

export default async function Casino({ searchParams }: PageSearchParams) {
    const { topup = false, cashin = false, lost = false, won = 0 } = await searchParams
    const { credits } = await getSessionModel()
    return (
        <>
            <div className="min-h-1/10">
                <h1 className="text-3xl font-bold">Casino Jackpot</h1>
                <p>Avalable credits: {credits}</p>
            </div>
            <div className="min-h-9/10">
                <ButtonLink
                    href={DASHBOARD + "?cashin=true"}
                    className="mr-2"
                >
                    Cash In
                </ButtonLink>
                {credits > 0 &&
                    <Button onClick={cashoutAction} color="red">
                        Cash out
                    </Button>
                }
                <SlotMachine credits={credits} />
            </div>
            <TopUpModal isOpen={!!topup} />
            <CashInModal isOpen={!!cashin} />
            {!!lost && <LoseModal />}
            {!!won && <WonModal worth={won} />}
        </>
    );
}
