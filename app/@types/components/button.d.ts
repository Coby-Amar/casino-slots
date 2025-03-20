type button = import('react').ButtonHTMLAttributes<HTMLButtonElement>
type ButtonDesignType = "blue" | "red" | "green" | "emerald"

type ButtonProps = button & {
    color?: ButtonDesignType
}

type ButtonLinkProps = Pick<ButtonProps, 'color' | 'children' | 'className'> & {
    href: string
}