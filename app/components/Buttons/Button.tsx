import buttonConfig from './config'

const defaultCss = 'inline-block px-6 py-2 text-lg font-medium text-white bg-blue-500 border-none rounded-lg cursor-pointer transition-colors duration-300 disabled:outline-solid disabled:border-slate-200/100 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none disabled:cursor-not-allowed'

const Button = ({ children, color = "blue", className = '', ...rest }: ButtonProps) => (
    <button
        {...rest}
        className={`${buttonConfig[color]} ${defaultCss} ${className}`}
    >
        {children}
    </button>
)

export default Button