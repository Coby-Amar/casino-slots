type ReactNode = import("react").ReactNode
interface HasChildren {
    children?: ReactNode
}

interface LayoutProps extends HasChildren {
    types: never
}
