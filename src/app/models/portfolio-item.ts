export interface PortfolioItem {
    category: string,
    image: string,
    title: string,
    details: string[]
}
export type WorkItem = {
    id?: string | undefined,
    type?: string,
    image?: string,
    videoUrl?: string,
    title?: string,
    categories?: string[],
    size?: string
}
export interface VideoDetail {
    thumbnail: string,
    category: string,
    thumbnailCaption: string,
    videoUrl: string,
    date: Date
}