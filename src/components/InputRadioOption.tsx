import React from "react"
import { Label } from "./Label"
import { classNames } from "../utils/utils"
import { PhantomSetupKeys } from "./d"
import { useSetupContext } from "../contexts/dataContext"

interface InputRadioOptionProps
  extends React.AllHTMLAttributes<HTMLInputElement> {
  value: string | number
  forName?: PhantomSetupKeys
  id?: string
  inputStyleOverride?: string
  warning?: true
}

export const InputRadioOption = ({
  forName,
  children,
  id,
  warning,
  value,
  inputStyleOverride = "",
}: InputRadioOptionProps) => {
  const { data, updateField } = useSetupContext()

  const isString = typeof children === "string"
  const size = " w-[14px] h-[14px]" // duplicating it to have pointer events and focus work while using real and faux radiobutton

  // forName and ID are always added when Group clones it. Asserted as existing below
  if (forName === undefined || id === undefined) {
    throw "missing forName or id"
  }

  return (
    <div className="mb-2 last-of-type:mb-0">
      <div className="inline-flex items-start ">
        <div
          className={classNames(
            "relative inline-flex items-center mt-[5px]",
            inputStyleOverride
          )}
        >
          <input
            className={classNames(
              size,
              "peer relative",
              warning
                ? "hover:border-redi-danger"
                : "hover:border-redi-primary",
              " cursor-pointer appearance-none -z-1"
            )}
            type="radio"
            name={forName}
            value={value}
            // forName and ID are always added when InputRadioGroup clones them
            checked={data[forName!] === value}
            onChange={e => {
              updateField(forName!, e.target.value)
            }}
            id={id}
          />
          <span
            className={`${size} opacity-0 absolute rounded-full pointer-events-none peer-checked:bg-white peer-checked:border ${
              warning
                ? "peer-checked:border-redi-danger"
                : "peer-checked:border-redi-primary"
            } peer-checked:opacity-100 transition-all ease-in-out`}
          >
            <span
              className={`rounded-full ${
                warning
                  ? "bg-redi-danger shadow-control-light-red"
                  : "bg-redi-primary shadow-control-light-blue"
              }  absolute inset-[2px] `}
            ></span>
          </span>
        </div>
        {isString ? (
          <Label labelSize="sm" htmlFor={id} className="ml-4">
            {children}
          </Label>
        ) : (
          <label htmlFor={id} className="ml-4">
            {children}
          </label>
        )}
      </div>
    </div>
  )
}
