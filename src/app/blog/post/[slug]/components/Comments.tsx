'use client'
import { getAvatarColor } from "@/util/avatarColor"
import { AnimatePresence, motion } from "framer-motion"
import { ThumbsUp } from "lucide-react"
import { useState } from "react"

export function Comments() {
    const [expandedComments, setExpandedComments] = useState<number[]>([])
    const [likeCounter, setLikeCounter] = useState<Record<number, number>>({})
    const [displayedComments, setDisplayedComments] = useState(4)
    const [isLoading, setIsLoading] = useState(false)

    function handleExpandComment(commentId: number) {
        setExpandedComments(prevState => {
            const commentIdPositionIfExists = prevState.indexOf(commentId)
            if (commentIdPositionIfExists !== -1) {
                const newState = [...prevState]
                newState.splice(commentIdPositionIfExists, 1)
                return newState

            }

            return [...prevState, commentId]
        })
    }

    function handleLike(commentId: number) {
        console.log('oi')
        setLikeCounter(prevState => {
            const newState = {
                ...prevState,
                [commentId]: prevState[commentId] ? prevState[commentId] + 1 : 1,
            }
            console.log(newState)
            return newState
        })

    }

    function loadMoreComments() {
        setIsLoading(true)
        // Simula um delay de carregamento
        setTimeout(() => {
            setDisplayedComments(prev => prev + 3)
            setIsLoading(false)
        }, 800)
    }

    const comments = [
        {
            id: 1,
            name: "Ana Souza",
            email: "ana.souza@example.com",
            likes: 12,
            content: "Excelente post! Me ajudou a entender melhor sobre o tema."
        },
        {
            id: 2,
            name: "Carlos Mendes",
            email: "carlos.mendes@example.com",
            likes: 5,
            content: "Achei interessante, mas gostaria de ver exemplos práticos."
        },
        {
            id: 3,
            name: "Juliana Ribeiro",
            email: "juliana.r@example.com",
            likes: 18,
            content: "Muito bem explicado, parabéns pelo conteúdo!"
        },
        {
            id: 4,
            name: "Marcos Lima",
            email: "marcos.lima@example.com",
            likes: 2,
            content: "Concordo com a ideia, mas acho que faltou citar algumas referências."
        },
        {
            id: 5,
            name: "Fernanda Alves",
            email: "fernanda.alves@example.com",
            likes: 9,
            content: "Gostei bastante do artigo, espero que venham mais conteúdos assim!"
        },
        {
            id: 6,
            name: "Ricardo Pires",
            email: "ricardo.pires@example.com",
            likes: 22,
            content: "Quero parabenizar pelo texto, realmente ficou muito completo. Eu já vinha pesquisando sobre esse assunto há algum tempo, mas sempre encontrava materiais rasos ou que apenas repetiam o básico. Aqui foi diferente: você conseguiu explicar conceitos de forma clara e ainda trouxe pontos que normalmente passam despercebidos. Acho que seria legal expandir ainda mais trazendo estudos de caso ou exemplos do mercado, porque isso ajudaria muito quem está tentando aplicar esses conhecimentos na prática."
        },
        {
            id: 7,
            name: "Patrícia Gomes",
            email: "patricia.gomes@example.com",
            likes: 15,
            content: "Gostei muito da maneira como o conteúdo foi estruturado, principalmente porque você conseguiu criar uma linha de raciocínio que facilita bastante a leitura. No entanto, senti falta de uma seção com links e referências externas para que eu pudesse me aprofundar ainda mais. De qualquer forma, já salvei o post nos meus favoritos e pretendo revisitar em outros momentos para revisar os pontos principais. Esse tipo de material é raro na internet em português, então parabéns pela dedicação!"
        }
    ]

    const visibleComments = comments.slice(0, displayedComments)
    const hasMoreComments = displayedComments < comments.length

    return (
        <section>
            <div className="container flex flex-col mt-8 rounded-lg border p-6 gap-4">
                <h2 className="text-3xl font-bold  mb-4">
                    <span>Comentários ({comments.length})</span>
                </h2>
                <AnimatePresence>
                    {visibleComments.map(comment => (
                        <motion.div
                            key={comment.id}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div

                                className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 shadow-sm hover:bg-zinc-800/60 transition"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`flex h-8 w-8 items-center justify-center rounded-full text-white font-semibold ${getAvatarColor(comment.name)}`}
                                        >
                                            {comment.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-medium">{comment.name}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleLike(comment.id)}
                                        className={`flex items-center gap-1 text-sm transition ${likeCounter[comment.id] && likeCounter[comment.id] > 0 ? "text-purple-500" : "text-zinc-400 hover:text-purple-400"
                                            }`}
                                    >
                                        <ThumbsUp className="h-4 w-4" />
                                        {comment.likes}
                                    </button>
                                </div>
                                <hr className="my-4" />
                                <p className={`mt-3 text-sm leading-relaxed text-zinc-200 ${expandedComments.includes(comment.id) ? "" : "line-clamp-3"}`}>
                                    {comment.content}
                                </p>
                                {comment.content.length > 150 && (
                                    <button
                                        onClick={() => handleExpandComment(comment.id)}
                                        className="mt-1 text-xs text-purple-400 hover:underline"
                                    >
                                        {expandedComments.includes(comment.id) ? "Ver menos" : "Ver mais"}
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                {hasMoreComments && (
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
                )}

                {!hasMoreComments && comments.length > 4 && (
                    <div className="text-center mt-6 text-zinc-500 text-sm">
                        Todos os comentários foram carregados
                    </div>
                )}
            </div>
        </section>
    )
}