'use client'

import { FileSpreadsheetIcon } from "lucide-react"
import dynamic from "next/dynamic"
import { useTranslations } from "next-intl"
import { useState } from "react"

import { Button } from "@/components/ui/button"

import { GithubRepository } from "@/services/gitHub/githubRepositories"
interface IProjectDialog {
    projectInfo: GithubRepository
}
export function ProjectModal({ projectInfo }: IProjectDialog) {
  const t = useTranslations('homepage.projects')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const LazyProjectDialog = dynamic(
    () => import("./ProjectDialog").then(mod => mod.ProjectDialog),
    { ssr: false }
  )

  function handleToggleModal() {
    setIsModalOpen(prevState => !prevState)
  }

  return (
    <>

      <Button
        variant="outline"
        size="sm"
        className="hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300"
        onClick={handleToggleModal}
      >
        <FileSpreadsheetIcon className="w-4 h-4" />
        {t('buttons.readme')}
      </Button>
      <LazyProjectDialog projectInfo={projectInfo} isModalOpen={isModalOpen} handleToggleModal={handleToggleModal} />
    </>
  )
}