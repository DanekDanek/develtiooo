export interface IRepository {
    name: string
    full_name: string
    description: string
    id: string
    url: string
}

export interface ISearchResults {
    items: Array<IRepository>
}