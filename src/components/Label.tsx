import React from "react"
import { Text } from "./Text"
import { classNames } from "../utils/utils"

export type LabelSizeType = "lg" | "md" | "sm"

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  optional?: true
  labelSize?: LabelSizeType
}

export const Label = ({
  optional,
  labelSize = "lg",
  className: passedStyles = "",
  children,
  htmlFor,
  ...props
}: LabelProps) => {
  return (
    <label
      className={classNames("inline-block", passedStyles)}
      htmlFor={htmlFor}
      {...(props && props)}>
      <Text variant={`label-${labelSize}`}>
        {children}
        {optional === true ? (
          <span className="text-redi-placeholder ml-1">(optional)</span>
        ) : null}
      </Text>
    </label>
  )
}
