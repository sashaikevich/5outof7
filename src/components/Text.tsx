import { classNames } from "../utils/utils"

type Element = "h1" | "h2" | "h3" | "h4" | "p" | "span"

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "section-title" | "label-lg" | "label-md" | "label-sm" | "help"
  children: React.ReactNode
  el?: Element
}

export const Text = ({
  variant,
  children,
  el,
  className: passedStyles = "",
  // make other components flexible with props
  ...props
}: TextProps) => {
  let classes = "" as string

  switch (variant) {
    case "label-lg": {
      classes =
        "text-redi-dark/90 text-redesize-m lg:text-redisize-mm font-semibold"
      break
    }
    case "label-md": {
      classes =
        "text-redi-dark/80 text-redisize-m font-semibold mt-[1px]"
      break
    }
    case "label-sm": {
      classes = "text-redisize-ss font-bold text-redi-medium"
      break
    }
    case "section-title": {
      classes =
        " font-semibold text-xl lg:text-2xl text-redi-primary-dark"
      break
    }
    case "help": {
      classes = " font-semibold text-redisize-xs  text-redi-primary-50"
      break
    }
    default: {
      classes = "italic text-redi-medium"
      break
    }
  }

  const Component = el || "span"
  // uncomment to see what's not styled with <Text /> on the page
  // return <></>
  return (
    <Component {...props} className={`${classes} ${passedStyles}`}>
      {children}
    </Component>
  )
}
