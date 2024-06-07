export interface PortfolioItem {
    category: string,
    image: string,
    title: string,
    details: string[]
}
export type WorkItem = {
    id?: string|undefined,
    type?: string,
    image?: string,
    videoUrl?: string,
    title?: string,
    categories?: string[],
    size?: string
}