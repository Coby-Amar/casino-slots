const Input = ({ label, error, name, className, ...rest }: InputProps) => {
    return (
        <div className={className}>
            {label &&
                <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
                    {label}
                </label>
            }
            <input
                {...rest}
                id={name}
                name={name}
                className={`border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            />
            {error && <div>{error}</div>}
        </div>
    )
}

export default Input
