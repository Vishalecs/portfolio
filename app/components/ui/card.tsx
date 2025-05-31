// components/ui/card.tsx
import * as React from "react"
import { cn } from "../../lib/utils" // Utility for merging classNames

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "backdrop-blur-xl bg-white/95 border border-gray-200/50 shadow-xl rounded-3xl overflow-hidden",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export { Card }