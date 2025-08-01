import { httpClient } from "@/lib/httpClient";
import { Cloud, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type ProjectMetadata = {
  long_description: string;
  features: string[];
  technologies: string[];
  category: string
};

type GithubRepository =  {
    title: string,
    description: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    technologies: string[],
    features: string[],
    category: string
}

export async function githubRepositories(): Promise<GithubRepository[] | null> {
    const [error, data] = await httpClient<GitHubRepository[]>('https://api.github.com/users/henriqueSydney/repos', {cache: 'no-cache'});

    if (error) {
        console.error("Error fetching GitHub repositories:", error);
        return null;
    }

    const projectsToShow = data.filter((project: GitHubRepository) => 
        project.topics.includes('portfolio') && project.visibility === 'public')

    const projectWithDetails: GithubRepository[] = []

    for (const project of projectsToShow) {
        const metadataUrl = `https://api.github.com/repos/${project.full_name}/contents/.github/metadata.json`;

        const [metadataError, metadataFile] = await httpClient<{
            content: string;
            encoding: string;
        }>(metadataUrl, { cache: 'no-cache' });

        if (metadataError) {
            console.warn(`Sem metadata para ${project.name}:`, metadataError);
            projectWithDetails.push({ 
                title: project.description || project.name,
                description: project.description || "Sem descrição",
                icon: Cloud, // Default icon, can be customized later
                technologies: [],
                features: [],
                category: '' // Default category, can be customized later
            });
            continue;
        }

        try {
            const decoded = atob(metadataFile.content)
            const parsed: ProjectMetadata = JSON.parse(decoded);
            projectWithDetails.push({ 
                title: project.description || project.name,
                description: parsed.long_description || project.description || "Sem descrição",
                icon: Cloud, // Default icon, can be customized later
                technologies: parsed.technologies || [],
                features: parsed.features || [],
                category: parsed.category || ''
            });
        } catch (err) {
            console.error(`Erro ao processar metadata de ${project.name}:`, err);
            projectWithDetails.push({ 
                title: project.description || project.name,
                description: project.description || "Sem descrição",
                icon: Cloud, // Default icon, can be customized later
                technologies: [],
                features: [],
                category: '' // Default category, can be customized later
            });
        }
    
    }  

  return projectWithDetails;
}