import Link from "next/link"

import { registerAction } from "~/actions/auth"
import Form from "~/components/Form"
import Input from "~/components/Input"


const RegisterPage = () => (
    <>
        <Form action={registerAction} submitText="Register">
            <Input
                required
                label="Username"
                placeholder="Enter username/email"
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
            Already have an account?
            <Link href="/login" className="ml-2 text-sky-500">Login</Link>
        </p>
    </>
)

export default RegisterPage