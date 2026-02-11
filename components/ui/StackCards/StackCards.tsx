import { Progress } from "@/components/ui/Progress/Progress"


export const StackCards = ({
    title,
    description,
    percent,
    progressLabel,
}: { title: string, description: string, percent: number, progressLabel: string }) => {

    return (
        <div className="h-full min-h-0 relative p-0.75 overflow-hidden rounded-lg">
            <div
                className="absolute inset-0 bg-linear-to-br from-primary to-secondary"
            />
            {/* Conteúdo: preenche o card e distribui o espaço; o texto se adapta */}
            <div className="relative h-full min-h-0 flex flex-col bg-background justify-between items-stretch p-6 rounded-lg">
                <h3 className="font-poppins font-bold text-auto mb-2 shrink-0">{title}</h3>
                <p className="font-niramit text-sm flex-1 min-h-0 overflow-auto mb-2 md:mb-0">{description}</p>
                <div className="shrink-0">
                    <Progress value={percent} title={progressLabel}/>
                </div>
            </div>
        </div>
    )
}