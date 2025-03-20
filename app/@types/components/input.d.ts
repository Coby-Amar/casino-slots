type input = import('react').InputHTMLAttributes<HTMLInputElement>

type InputProps = input & {
    label?: string;
    error?: string;
}