"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

type ProgressProps = React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    value?: number | null
}

const Progress = React.forwardRef<
    React.ComponentRef<typeof ProgressPrimitive.Root>,
    ProgressProps
>(({ className, value = 0, ...props }, ref) => {
    const safeValue = typeof value === "number" ? value : 0

    return (
    <div className="w-full flex flex-col gap-1">
        <div className="flex items-center justify-end font-niramit text-xs font-medium text-muted-foreground">
            <span>{Math.round(safeValue)}%</span>
        </div>
        <ProgressPrimitive.Root
            ref={ref}
            className={cn(
                "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
                className
            )}
            {...props}
        >
            <ProgressPrimitive.Indicator
                className="h-full w-full flex-1 bg-primary transition-all"
                style={{ transform: `translateX(-${100 - safeValue}%)` }}
            />
        </ProgressPrimitive.Root>
    </div>
    )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
