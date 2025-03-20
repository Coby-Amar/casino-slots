const AuthLayout = ({ children }: LayoutProps) => (
    <main className="p-5 flex flex flex-col items-center">
        <h1 className="text-3xl">Welcome to Casino Slots</h1>
        {children}
    </main>
)

export default AuthLayout