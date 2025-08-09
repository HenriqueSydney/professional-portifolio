'use client'

import { Card } from "@/components/ui/card"
import { useSearchParams } from "next/navigation"

type BlogPostsFilter = {
    category: string
    query: string
    favorites: boolean
    fixed: boolean
}

export function BlogPostsFilter (props: BlogPostsFilter){
    const searchParams = useSearchParams()

    

    return (
        <Card>
            <h1>Filtros</h1>
                        
        </Card>
    )
}