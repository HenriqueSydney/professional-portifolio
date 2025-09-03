'use client'
import { useEffect, useState } from 'react'
import { incrementPostViewAction } from '@/actions/posts/incrementPostViewAction'
import { BookOpen } from 'lucide-react'

interface IPostViewTracker {
    postId: string
    numberOfViews: number
}

export function PostViewTracker({ postId, numberOfViews }: IPostViewTracker) {
    const [currentNumberOfViews, setCurrentNumberOfViews] = useState(numberOfViews)

    async function incrementPostView() {
        setCurrentNumberOfViews(numberOfViews + 1)
        const result = await incrementPostViewAction({ postId })
        if (!result.success) {
            setCurrentNumberOfViews(prev => prev - 1)
        }

    }

    useEffect(() => {
        incrementPostView()
    }, [postId])

    return (
        <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            {currentNumberOfViews} visualizações
        </div>
    )
}