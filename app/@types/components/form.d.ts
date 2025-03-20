type FormProps = HasChildren & {
    action(formData: FormData): string | Promise<string> | Promise<void>
    submitText: string
}
