import { redirect, RedirectType } from "next/navigation";

import { DASHBOARD, LOGIN } from "~/routes";
import { logoutAction } from "~/actions/auth";
import Button from "~/components/Buttons/Button";
import { getSessionModel, isSessionLoggedin } from "~/utils";
import ButtonLink from "~/components/Buttons/ButtonLink";

export default async function AuthLayout({ children }: HasChildren) {
    const isLoggedin = await isSessionLoggedin()
    if (!isLoggedin) {
        redirect(LOGIN, RedirectType.replace)
    }
    const { name, balance } = await getSessionModel()
    return (
        <main className="flex">
            <nav className="flex flex-col justify-between py-2 px-5 bg-slate-300 h-screen w-[20dvw] min-w-20">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-demibold">
                        {name}
                    </h2>
                    <p className="text-l font-normal">
                        Balance: {balance}
                    </p>
                    <ButtonLink href={DASHBOARD + "?topup=true"}>
                        Top up
                    </ButtonLink>
                </div>
                <Button onClick={logoutAction} color="red">
                    Logout
                </Button>
            </nav>
            <div className="p-5 w-[80dvw] min-h-[100dvh]">
                {children}
            </div>
        </main >
    )
}
