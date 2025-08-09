import { fetchBlogPosts } from "@/services/notion/fetchBlogPosts"

type BlogPosts = {
    searchParams: {
        category: string
        query: string
        favorites: boolean
        fixed: boolean
        page: number
    }
}

export default async function BlogPosts({searchParams}:BlogPosts){
    const {category, query, favorites, fixed, page} = await searchParams
    
    const blogPosts = await fetchBlogPosts({ numberOfPostsPerPage: 10, page})

    return(
        

    )
}