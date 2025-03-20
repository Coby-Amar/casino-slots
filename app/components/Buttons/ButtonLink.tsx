import Link from "next/link"
import buttonConfig from './config'

const defaultCss = 'text-center inline-block px-6 py-2 text-lg font-medium text-white bg-blue-500 border-none rounded-lg cursor-pointer transition-colors duration-300 disabled:outline-solid disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none disabled:cursor-not-allowed'

const ButtonLink = ({ children, className = '', color = 'blue', href }: ButtonLinkProps) => (
    <Link
        href={href}
        className={`${buttonConfig[color]} ${defaultCss} ${className}`}
    >
        {children}
    </Link>
)


export default ButtonLink