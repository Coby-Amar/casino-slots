import { redirect, RedirectType } from "next/navigation"
import { DASHBOARD } from "~/routes"
import { isSessionLoggedin } from "~/utils"

const AuthLayout = async ({ children }: LayoutProps) => {
    const isLoggedin = await isSessionLoggedin()
    if (isLoggedin) {
        redirect(DASHBOARD, RedirectType.replace)
    }
    return (
        <main className="p-5 flex flex flex-col items-center">
            <h1 className="text-3xl">Welcome to Casino Slots</h1>
            {children}
        </main>
    )
}

export default AuthLayout