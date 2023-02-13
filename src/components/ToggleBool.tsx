import { useState } from "react"

const ToggleBool = ({
  initialState,
  control,
}: {
  initialState: boolean
  control: (bool: boolean) => void
}) => {
  const [bool, setBool] = useState(initialState)
  return (
    <>
      <div className="bg-slate-200 inline-block rounded-md  overflow-hidden cursor-pointer">
        <span
          className={`border-r py-1 px-2 ${
            bool ? "bg-blue-700 text-white" : "opacity-60 hover:opacity-100"
          }`}
          onClick={() => {
            setBool(true)
            control(true)
          }}>
          true
        </span>
        <span
          className={`py-1 px-2
          ${!bool ? "bg-blue-700 text-white" : "opacity-60 hover:opacity-100"}
          `}
          onClick={() => {
            setBool(false)
            control(false)
          }}>
          false
        </span>
      </div>
    </>
  )
}

export default ToggleBool
