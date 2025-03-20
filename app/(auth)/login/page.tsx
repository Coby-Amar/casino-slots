import Link from "next/link"

import { loginAction } from "~/actions/auth"
import Form from "~/components/Form"
import Input from "~/components/Input"
import { REGISTER } from "~/routes";

export default async function LoginPage() {
    return (
        <>
            <Form action={loginAction} submitText="Login">
                <Input
                    required
                    label="Username"
                    placeholder="Enter username"
                    name="username"
                    type="email"

                />
                <Input
                    required
                    label="Password"
                    placeholder="Enter password"
                    name="password"
                    type="password"
                    className="mt-5"
                />
            </Form>
            <p className="text-base">
                Don&apos;t have an account?
                <Link href={REGISTER} className="ml-2 text-sky-500">Register</Link>
            </p>
        </>
    )
}
