export const TwoColumns = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid gap-x-8 gap-y-2 grid-cols-options xl:grid-cols-options-xl">
      {children}
    </div>
  )
}
