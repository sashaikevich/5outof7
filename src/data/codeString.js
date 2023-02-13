import { SyntaxHighlighterProps } from "react-syntax-highlighter"
export const codeString =
  'import React, { useEffect, useRef, useState } from "react"\n' +
  'import { classNames } from "../utils/utils"\n' +
  'import { Label } from "./Label"\n' +
  'import { SetupKeysT } from "./d"\n' +
  'import { useSetupContext } from "@/contexts/dataContext"\n' +
  "\n" +
  "interface InputRangeType {\n" +
  "  min: number\n" +
  "  max: number\n" +
  "  mappedName: SetupKeysT | string\n" +
  '  size?: "sm" | "md" | "lg" | "full"\n' +
  "  warning?: boolean\n" +
  "  showLabels?: boolean\n" +
  "  numSteps?: number\n" +
  "  labelLow?: string\n" +
  "  labelHigh?: string\n" +
  "  showTooltip?: boolean\n" +
  "  demoState?: { [key: string]: number }\n" +
  "  tooltipOverride?: (v: number | null) => React.ReactNode\n" +
  "}\n" +
  "\n" +
  "export const InputRange = ({\n" +
  '  size = "sm",\n' +
  "  warning,\n" +
  "  min,\n" +
  "  max,\n" +
  "  showLabels = false,\n" +
  "  numSteps = max - min,\n" +
  "  labelLow,\n" +
  "  labelHigh,\n" +
  "  mappedName,\n" +
  "  demoState,\n" +
  "  showTooltip = true,\n" +
  "  tooltipOverride = val => val,\n" +
  "}: InputRangeType) => {\n" +
  "  const { updateField } = useSetupContext()\n" +
  "  const data = demoState ? demoState : useSetupContext().data\n" +
  "\n" +
  "  const rangeVal = data[mappedName] as number\n" +
  "  // normalize to bounds (important when another field updates min/max of this range)\n" +
  "  useEffect(() => {\n" +
  "  // need the effect for cases when another inut changes the max/min of this input\n" +
  "  // e.g. when sending schedule changes the daily maximum\n" +
  "    if (rangeVal < min) {\n" +
  "      updateField(mappedName, min)\n" +
  "    }\n" +
  "    if (rangeVal > max) {\n" +
  "      updateField(mappedName, max)\n" +
  "    }\n" +
  "  }, [rangeVal, min, max])\n" +
  "\n" +
  "  const [isActive, setIsActive] = useState(false)\n" +
  "  const rangeRef = useRef<HTMLInputElement>(null)\n" +
  "  const tooltipRef = useRef<HTMLInputElement>(null)\n" +
  "\n" +
  "  useEffect(() => {\n" +
  "    if (rangeVal === null) return\n" +
  "    const progress = (rangeVal - min) / (max - min)\n" +
  "    // color the inputed range part of the bar\n" +
  "    if (rangeRef.current) {\n" +
  "      rangeRef.current.style.backgroundSize = `${Math.floor(\n" +
  "        progress * 100\n" +
  "      )}% 100%`\n" +
  "    }\n" +
  "\n" +
  "    // calc the placement of the tooltip\n" +
  "    if (rangeRef.current && tooltipRef.current) {\n" +
  "      /*\n" +
  "      the width of the thumb is not equal to the full range, since the thumb stops when it hits\n" +
  "      the bounds of the range. So it starts from 1/2 the thumb's width (16px) from the left edge, and \n" +
  "      ends 1/2 the thumb's width from the right edge\n" +
  "      */\n" +
  "      const THUMB_WIDTH = 16\n" +
  "      const effectiveTravelRange =\n" +
  "        rangeRef.current.getBoundingClientRect().width - THUMB_WIDTH\n" +
  "      const leftPos = effectiveTravelRange * progress\n" +
  "      tooltipRef.current.style.left = `${leftPos + THUMB_WIDTH / 2}px`\n" +
  "    }\n" +
  "  }, [rangeVal, min, max])\n" +
  "\n" +
  "  const rangeSize = {\n" +
  '    sm: "w-24",\n' +
  '    md: "w-64",\n' +
  '    lg: "w-96",\n' +
  '    full: "w-full",\n' +
  "  }\n" +
  "\n" +
  "  return (\n" +
  '    <div className="flex items-center">\n' +
  "      {showLabels && (\n" +
  "        <Label\n" +
  '          labelSize="sm"\n' +
  '          className="mr-4"\n' +
  "          onClick={() => {\n" +
  "            if (rangeRef.current) rangeRef.current.focus()\n" +
  "            updateField(mappedName, min)\n" +
  "          }}>\n" +
  "          {labelLow || min}\n" +
  "        </Label>\n" +
  "      )}\n" +
  "\n" +
  "      <div\n" +
  "        className={classNames(\n" +
  '          "custom-range",\n' +
  '          warning ? "custom-range-warning" : "custom-range-regular",\n' +
  '          "relative",\n' +
  "          rangeSize[size]\n" +
  "        )}>\n" +
  "        <input\n" +
  '          type="range"\n' +
  "          min={min}\n" +
  "          max={max}\n" +
  "          step={(max - min) / numSteps || undefined}\n" +
  "          ref={rangeRef}\n" +
  "          value={(data[mappedName] as number) || min}\n" +
  "          onFocus={() => setIsActive(true)}\n" +
  "          onBlur={() => setIsActive(false)}\n" +
  "          onPointerEnter={() => setIsActive(true)}\n" +
  "          onPointerLeave={() => setIsActive(false)}\n" +
  "          onChange={e => {\n" +
  "            // to get rid of decimal values caused by step devisions (0-100 vs 1-100)\n" +
  "            updateField(mappedName, parseInt(e.target.value))\n" +
  "          }}\n" +
  '          className="no-rding peer"\n' +
  "        />\n" +
  "        {showTooltip && (\n" +
  "          <div\n" +
  "            ref={tooltipRef}\n" +
  "            className={classNames(\n" +
  '              isActive ? "opacity-100 scale-100" : "opacity-0 scale-75",\n' +
  '              warning ? "bg-redi-danger-bg" : "bg-redi-light-bg",\n' +
  '              "rounded-md pointer-events-none shadow-xl text-center absolute px-3 py-1 bottom-full mb-1 translate-x-[-50%] transition origin-bottom"\n' +
  "            )}>\n" +
  "            <span\n" +
  "              className={classNames(\n" +
  '                warning ? "bg-redi-danger-bg" : "bg-redi-light-bg",\n' +
  '                "w-2 h-2 block top-full absolute rotate-45 -mt-1 left-[50%] translate-x-[-50%]"\n' +
  "              )}></span>\n" +
  "            <span\n" +
  "              className={classNames(\n" +
  '                warning ? "text-redi-danger" : "text-redi-primary",\n' +
  '                "font-semibold"\n' +
  "              )}>\n" +
  "              {tooltipOverride(rangeVal)}\n" +
  "            </span>\n" +
  "          </div>\n" +
  "        )}\n" +
  "      </div>\n" +
  "\n" +
  "      {showLabels && (\n" +
  "        <Label\n" +
  '          labelSize="sm"\n' +
  '          className="ml-4"\n' +
  "          onClick={() => {\n" +
  "            if (rangeRef.current) rangeRef.current.focus()\n" +
  "            updateField(mappedName, max)\n" +
  "          }}>\n" +
  "          {labelHigh || max}\n" +
  "        </Label>\n" +
  "      )}\n" +
  "    </div>\n" +
  "  )\n" +
  "}"
