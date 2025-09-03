'use client'

interface ILoadMoreComments {
    loadMoreComments: () => void
    isLoading: boolean
}

export function LoadMoreComments({ loadMoreComments, isLoading }: ILoadMoreComments) {
    return (
        <div className="flex justify-center mt-6">
            <button
                onClick={loadMoreComments}
                disabled={isLoading}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:opacity-50 text-white rounded-lg transition-colors flex items-center gap-2"
            >
                {isLoading ? (
                    <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Carregando...
                    </>
                ) : (
                    'Carregar mais comentários'
                )}
            </button>
        </div>
    )
}