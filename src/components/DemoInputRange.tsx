import React, { useEffect, useRef, useState } from "react"
import type { Dispatch, SetStateAction } from "react"
import { Label } from "./Label"
import { classNames } from "../utils/utils"

interface DemoInputRangeType {
  min: number
  max: number
  val: number
  updateVal: (val: number) => void
  size?: "sm" | "md" | "lg" | "full" | string
  warning?: boolean
  showLabels?: boolean
  numSteps?: number | undefined
  labelLow?: string
  labelHigh?: string
  showTooltip?: boolean
  tooltipOverride?: (v: number | null) => React.ReactNode
}

const DemoInputRange = ({
  min = 0,
  max,
  val,
  updateVal,
  size = "sm",
  warning,
  numSteps = max - min,
  showLabels = false,
  labelLow,
  labelHigh,
  showTooltip = true,
  tooltipOverride = val => val,
}: DemoInputRangeType) => {
  // normalize to bounds (important when another field updates min/max of this range)

  useEffect(() => {
    // need the effect for cases when another inut changes the max/min of this input
    // e.g. when sending schedule changes the daily maximum

    if (val < min) {
      updateVal(min)
    }
    if (val > max) {
      updateVal(max)
    }
  }, [val, min, max])

  const [isActive, setIsActive] = useState(false)
  const rangeRef = useRef<HTMLInputElement>(null)
  const tooltipRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (val === null) return
    const progress = (val - min) / (max - min)
    // color the inputed range part of the bar
    if (rangeRef.current) {
      rangeRef.current.style.backgroundSize = `${Math.floor(
        progress * 100
      )}% 100%`
    }

    // calc the placement of the tooltip
    if (rangeRef.current && tooltipRef.current) {
      /*
      the width of the thumb is not equal to the full range, since the thumb stops when it hits
      the bounds of the range. So it starts from 1/2 the thumb's width (16px) from the left edge, and 
      ends 1/2 the thumb's width from the right edge
      */
      const THUMB_WIDTH = 16
      const effectiveTravelRange =
        rangeRef.current.getBoundingClientRect().width - THUMB_WIDTH
      const leftPos = effectiveTravelRange * progress
      tooltipRef.current.style.left = `${leftPos + THUMB_WIDTH / 2}px`
    }
  }, [val, min, max])

  const rangeSize = {
    sm: "w-24",
    md: "w-64",
    lg: "w-96",
    full: "w-full",
  }

  return (
    <div className="flex items-center">
      {showLabels && (
        <Label
          labelSize="sm"
          className="mr-4"
          onClick={() => {
            if (rangeRef.current) rangeRef.current.focus()
            updateVal(min)
          }}>
          {labelLow || min}
        </Label>
      )}

      <div
        className={classNames(
          "custom-range",
          warning ? "custom-range-warning" : "custom-range-regular",
          "relative",
          rangeSize[size]
        )}>
        <input
          type="range"
          min={min}
          max={max}
          step={(max - min) / numSteps || undefined}
          ref={rangeRef}
          value={(val as number) || min}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          onPointerEnter={() => setIsActive(true)}
          onPointerLeave={() => setIsActive(false)}
          onChange={e => {
            // to get rid of decimal values caused by step devisions (0-100 vs 1-100)
            updateVal(parseInt(e.target.value))
          }}
          className="no-rding peer"
        />
        {showTooltip && (
          <div
            ref={tooltipRef}
            className={classNames(
              isActive ? "opacity-100 scale-100" : "opacity-0 scale-75",
              warning ? "bg-redi-danger-bg" : "bg-redi-light-bg",
              "rounded-md pointer-events-none shadow-xl text-center absolute px-3 py-1 bottom-full mb-1 translate-x-[-50%] transition origin-bottom"
            )}>
            <span
              className={classNames(
                warning ? "bg-redi-danger-bg" : "bg-redi-light-bg",
                "w-2 h-2 block top-full absolute rotate-45 -mt-1 left-[50%] translate-x-[-50%]"
              )}></span>
            <span
              className={classNames(
                warning ? "text-redi-danger" : "text-redi-primary",
                "font-semibold"
              )}>
              {tooltipOverride(val)}
            </span>
          </div>
        )}
      </div>

      {showLabels && (
        <Label
          labelSize="sm"
          className="ml-4"
          onClick={() => {
            if (rangeRef.current) rangeRef.current.focus()
            updateVal(max)
          }}>
          {labelHigh || max}
        </Label>
      )}
    </div>
  )
}

export default DemoInputRange
