import React from "react"

import { Text } from "./Text"
import { TwoColumns } from "./TwoColumns"

interface SubSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  columnView?: boolean
  heading: string
  description?: string
}

export const SubSection = ({
  children,
  heading,
  description,
  columnView = true,
}: SubSectionProps) => {
  return (
    <section className="border-b border-b-redi-primary/10 py-12 last-of-type:border-none last-of-type:pb-0 first-of-type:pt-0">
      <Text el="h4" variant="label-lg" className="mb-4">
        {heading}
      </Text>
      {description && (
        <Text el="p" className="mb-4">
          {description}
        </Text>
      )}
      {columnView ? <TwoColumns>{children}</TwoColumns> : <>{children}</>}
    </section>
  )
}
