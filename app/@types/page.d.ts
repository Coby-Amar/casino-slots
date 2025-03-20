interface SearchParams {
    topup: boolean
    cashin: boolean
    lost: boolean
    won: number
}
type PageSearchParams = {
    searchParams: Promise<SearchParams> | Promise<Partial<SearchParams>>
}