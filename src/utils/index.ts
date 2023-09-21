import { news } from "@/types";

// remove duplicate data
export const removeDuplicateData = (articles: any) => { 
    const randomArticles:news[] = articles?.articles
    //filtering through articles to remove any duplicate articles from data
    const filterArticles = randomArticles.filter(article => article?.source.id !== null)
    return filterArticles
}