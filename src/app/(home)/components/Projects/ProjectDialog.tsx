'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { getRepositoryReadme } from "@/services/gitHub/getRepositoryReadme"
import { GithubRepository } from "@/services/gitHub/githubRepositories"
import { markdownToHtml } from "@/util/markdownToHtml"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { SkeletonFallback } from "./SkeletonFallback"


interface IProjectDialog {
    projectInfo: GithubRepository
    handleToggleModal: () => void
    isModalOpen: boolean
}

export function ProjectDialog({ projectInfo, isModalOpen, handleToggleModal }: IProjectDialog) {
    const [readme, setReadme] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    async function getReadmeForProject() {
        if (!isModalOpen) return
        setIsLoading(true)
        const projectReadme = await getRepositoryReadme({ full_name: projectInfo.full_name })
        if (projectReadme) {
            const htmlReadme = await markdownToHtml(projectReadme)
            setReadme(htmlReadme)
        } else {
            setReadme('')
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getReadmeForProject()
    }, [projectInfo])
    return (
        <Dialog open={isModalOpen} onOpenChange={handleToggleModal}>

            <DialogContent className="w-[70vw] max-w-[70vw] h-[70vh] overflow-y-auto flex flex-col justify-between">
                <div>
                    <DialogHeader>
                        <DialogTitle>Readme.MD</DialogTitle>
                        <DialogDescription>
                            Olhe detalhes da aplicação de forma fácil e prática
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-3">
                        {isLoading && <SkeletonFallback />}
                        {readme &&
                            <div
                                className="prose prose-invert max-w-none  dark:prose-invert"
                                dangerouslySetInnerHTML={{ __html: readme }}
                            />
                        }
                        {readme === '' &&
                            <div className="my-15 text-2xl flex flex-col items-center">
                                <strong>Readme.MD não localizado</strong>
                            </div>
                        }
                    </div>
                </div>
                <DialogFooter>

                    <Link href={projectInfo.link} target="_blank">
                        <Button
                            variant="default"
                            size="sm"
                            className="hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300"
                        >
                            <Github className="w-4 h-4" />
                            Confira o código
                            <ExternalLink className="w-4 h-4 mr-2" />
                        </Button>
                    </Link>
                    <DialogClose asChild>
                        <Button variant="outline" size="sm">Fechar</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>

        </Dialog >
    )
}
