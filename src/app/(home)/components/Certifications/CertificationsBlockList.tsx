import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"

interface ICertificationsBlockList {
    title: string
    Icon: LucideIcon
    list: {
        id: string
        description: string
    }[]
    numberOfColumns?: number
    highlight?: boolean
}

export function CertificationsBlockList({ title, Icon, list, numberOfColumns = 1, highlight = true }: ICertificationsBlockList) {
    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                    <Icon className="h-6 w-6 text-accent" />
                </div>
                <h2>{title}</h2>
            </div>
            <div className={`grid md:grid-cols-${numberOfColumns} gap-3`}>
                {list.map((cert) => (
                    <Badge
                        key={cert.id}
                        variant={highlight ? 'default' : 'outline'}
                        className="text-sm py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                        {cert.description}
                    </Badge>
                ))}
            </div>
        </div>
    )
}