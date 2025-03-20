'use client'
import { useState } from "react"
import Button from "./Buttons/Button"

const Form = ({ action, submitText, children }: FormProps) => {
    const [error, setErrors] = useState('')
    return (
        <form
            className="flex flex-col justify-around p-5"
            action={async formData => {
                const error = await action(formData)
                if (error) {
                    setErrors(error)
                }
            }}
        >
            {error && <div className="py-2 px-5 rounded text-red-700 bg-red-500/10">{error}</div>}
            {children}
            <Button className="mt-5" type="submit">
                {submitText}
            </Button>
        </form>
    )
}

export default Form