import Head from "next/head"
import Layout from "@/components/Layout"
import { useState } from "react"
import { useImmer } from "use-immer"
import DemoInputRange from "@/components/DemoInputRange"
import ToggleBool from "@/components/ToggleBool"

const Docs = () => {
  const [rangeStyle, setRangeStyle] = useImmer({
    min: 1,
    max: 10,
    labelLow: "",
    labelHigh: "",
    showLabels: false,
    size: "sm",
    warning: false,
    showTooltip: true,
    val: 1,
  })

  return (
    <Layout>
      <div className="p-3 pb-5 text-slate-700">
        <Head>
          <title>Example docs</title>
        </Head>
        <div className="max-w-[70ch] m-auto mb-10">
          <h1 className="text-3xl mb-4 font-semibold">Example docs:</h1>
          <p className="mb-6">
            I don't have any exceptional docs that I'd like to share, so I'll
            just share the docs I've done for this input component to give you
            an idea of how I write. When I know who the reader is, I tailor the
            docs to them. In this case the consumer is the front-end developer
            using this component on the new settings pages (it was part of a
            StoryBook library).
          </p>

          <h3 className="text-2xl mb-3 mt-10 font-bold">Playground:</h3>
          <p className="mb-8">
            Use the controls below to experiment with the element
          </p>

          <div className="bg-white p-6 mb-16 rounded-md drop-shadow-md ">
            <DemoInputRange
              {...rangeStyle}
              updateVal={val => {
                setRangeStyle(draft => {
                  draft.val = val
                })
              }}
            />
          </div>
        </div>
        <table className="table-auto w-full max-w-[70ch] m-auto  leading-tight ">
          <thead className="text-left">
            <tr>
              <th scope="col" className="pb-1 px-4 font-semibold">
                Name
              </th>
              <th scope="col" className="pb-1 px-4 font-semibold">
                Description
              </th>
              <th scope="col" className="pb-1 px-4 font-semibold">
                Default
              </th>
              <th scope="col" className="pb-1 px-4 font-semibold">
                Control
              </th>
            </tr>
          </thead>

          <tbody className="border rounded-md bg-white drop-shadow-sm">
            {/* mapped name */}

            <tr className="border-b border-b-slate-100">
              <td className="py-5 px-4 align-top font-medium">
                mappedName&nbsp;<span className="text-red-600">*</span>
              </td>
              <td className="py-5 px-4 align-top">
                Provide the key this range should map to. On the settings page,
                it would be one of the following:
                {LiList([
                  "dailyOutreach",
                  "limitRegularSearch",
                  "limitNavigatorSearch",
                  "limitGroupSearch",
                  "maxExecutionTime",
                  "maxParallelExecutions",
                  "maxRetries",
                  "manageFolders",
                  "keepNFolders",
                ])}
              </td>
              <td className="py-5 px-4 align-top whitespace-nowrap font-mono text-sm opacity-60">
                -
              </td>
              <td className="py-5 px-4 align-top whitespace-nowrap font-mono text-sm opacity-60">
                -
              </td>
            </tr>

            {/* min */}

            <tr className="border-b border-b-slate-100">
              <td className="py-5 px-4 align-top font-medium">
                min&nbsp;<span className="text-red-600">*</span>
              </td>
              <td className="py-5 px-4 align-top">
                Provide the minimum number for the range
              </td>
              <td className="py-5 px-4 align-top  font-mono text-sm opacity-60">
                0
              </td>
              <td className="py-5 px-4 align-top">
                <input
                  type="number"
                  value={rangeStyle.min}
                  className="form-input rounded-md border-slate-300 w-24"
                  onChange={e => {
                    let val = e.target.valueAsNumber
                    val = val >= 0 ? val : 0
                    val = val < rangeStyle.max ? val : rangeStyle.max - 1

                    setRangeStyle(draft => {
                      draft.min = val
                    })
                  }}
                />
              </td>
            </tr>

            {/* max */}

            <tr className="border-b border-b-slate-100">
              <td className="py-5 px-4 align-top font-medium">
                max&nbsp;<span className="text-red-600">*</span>
              </td>
              <td className="py-5 px-4 align-top">
                Provide the maximum number for the range
              </td>
              <td className="py-5 px-4 align-top  font-mono text-sm opacity-60">
                -
              </td>
              <td className="py-5 px-4 align-top">
                <input
                  type="number"
                  value={rangeStyle.max}
                  className="form-input rounded-md border-slate-300 w-24"
                  onChange={e => {
                    let val = e.target.valueAsNumber
                    val = val <= rangeStyle.min ? rangeStyle.min + 1 : val
                    setRangeStyle(draft => {
                      draft.max = val
                    })
                  }}
                />
              </td>
            </tr>

            {/* default value */}

            <tr className="border-b border-b-slate-100">
              <td className="py-5 px-4 align-top font-medium">val</td>
              <td className="py-5 px-4 align-top">
                Set the default value for the range
              </td>
              <td className="py-5 px-4 align-top font-mono text-sm opacity-60">
                -
              </td>
              <td className="py-5 px-4 align-top">
                <input
                  type="number"
                  value={rangeStyle.val}
                  className="form-input rounded-md border-slate-300 w-24"
                  onChange={e => {
                    let val = e.target.valueAsNumber
                    setRangeStyle(draft => {
                      draft.val = val
                    })
                  }}
                />
              </td>
            </tr>
            {/* show labels  */}
            <tr className="border-b border-b-slate-100">
              <td className="py-5 px-4 align-top font-medium">showLabels</td>
              <td className="py-5 px-4 align-top">
                Labels can be added to indicate range limits. If you set this to
                true, the range values will be used as labels. These can be
                overriden with any string (e.g. "Maximum").
              </td>
              <td className="py-5 px-4 align-top  font-mono text-sm opacity-60">
                false
              </td>
              <td className="py-5 px-4 align-top whitespace-nowrap">
                <ToggleBool
                  initialState={false}
                  control={(bool: boolean) => {
                    setRangeStyle(draft => {
                      draft.showLabels = bool
                    })
                  }}
                />
              </td>
            </tr>

            {/* label low */}

            <tr className="border-b border-b-slate-100">
              <td className="py-5 px-4 align-top font-medium">labelLow</td>
              <td className="py-5 px-4 align-top">
                Set the label for the minimal value
              </td>
              <td className="py-5 px-4 align-top  font-mono text-sm opacity-60">
                -
              </td>
              <td className="py-5 px-4 align-top">
                <input
                  type="text"
                  className="form-input rounded-md border-slate-300 w-32"
                  value={rangeStyle.labelLow}
                  onChange={e => {
                    setRangeStyle(draft => {
                      draft.labelLow = e.target.value
                    })
                  }}
                />
              </td>
            </tr>

            {/* label high */}

            <tr className="border-b border-b-slate-100">
              <td className="py-5 px-4 align-top font-medium">labelHigh</td>
              <td className="py-5 px-4 align-top">
                Set the label for the minimal value
              </td>
              <td className="py-5 px-4 align-top  font-mono text-sm opacity-60">
                -
              </td>
              <td className="py-5 px-4 align-top">
                <input
                  type="text"
                  value={rangeStyle.labelHigh}
                  className="form-input rounded-md border-slate-300 w-32"
                  onChange={e => {
                    setRangeStyle(draft => {
                      draft.labelHigh = e.target.value
                    })
                  }}
                />
              </td>
            </tr>

            {/* show tooltip */}

            <tr className="border-b border-b-slate-100">
              <td className="py-5 px-4 align-top font-medium">tooltip</td>
              <td className="py-5 px-4 align-top">
                Set whether or not you'd like to show the tooltip on hover and
                value change
              </td>
              <td className="py-5 px-4 align-top  font-mono text-sm opacity-60">
                true
              </td>
              <td className="py-5 px-4 align-top whitespace-nowrap">
                <ToggleBool
                  initialState={true}
                  control={(bool: boolean) => {
                    setRangeStyle(draft => {
                      draft.showTooltip = bool
                    })
                  }}
                />
              </td>
            </tr>

            {/* tooltip Override */}

            <tr className="border-b border-b-slate-100">
              <td className="py-5 px-4 align-top font-medium">
                tooltipOverride
              </td>
              <td className="py-5 px-4 align-top">
                If you want to control what's displayed in the tooltip, you can
                provide a callback function. It will receive the range value as
                an argument.
              </td>
              <td className="py-5 px-4 align-top  font-mono text-sm opacity-60">
                -
              </td>
              <td className="py-5 px-4 align-top  font-mono text-sm opacity-60">
                -
              </td>
            </tr>

            {/* size  */}

            <tr className="border-b border-b-slate-100">
              <td className="py-5 px-4 align-top font-medium">size</td>
              <td className="py-5 px-4 align-top">
                Use a small range when working with smaller numbers, and a
                larger range, when the numbers are bigger.
                {LiList(["sm", "md", "lg", "full"])}
              </td>
              <td className="py-5 px-4 align-top  font-mono text-sm opacity-60">
                "sm"
              </td>
              <td className="py-5 px-4 align-top ">
                <ul>
                  <li>
                    <label className="cursor-pointer">
                      <input
                        className="mr-2"
                        type="radio"
                        name="rangeSize"
                        value="sm"
                        checked={rangeStyle.size === "sm"}
                        onChange={e =>
                          setRangeStyle(draft => {
                            draft.size = e.target.value
                          })
                        }
                      />
                      sm
                    </label>
                  </li>
                  <li>
                    <label className="cursor-pointer">
                      <input
                        className="mr-2"
                        type="radio"
                        name="rangeSize"
                        value="md"
                        checked={rangeStyle.size === "md"}
                        onChange={e =>
                          setRangeStyle(draft => {
                            draft.size = e.target.value
                          })
                        }
                      />
                      md
                    </label>
                  </li>
                  <li>
                    <label className=" cursor-pointer">
                      <input
                        className="mr-2"
                        type="radio"
                        name="rangeSize"
                        value="lg"
                        checked={rangeStyle.size === "lg"}
                        onChange={e =>
                          setRangeStyle(draft => {
                            draft.size = e.target.value
                          })
                        }
                      />
                      lg
                    </label>
                  </li>
                  <li>
                    <label className=" cursor-pointer">
                      <input
                        className="mr-2"
                        type="radio"
                        name="rangeSize"
                        value="full"
                        checked={rangeStyle.size === "full"}
                        onChange={e =>
                          setRangeStyle(draft => {
                            draft.size = e.target.value
                          })
                        }
                      />
                      full
                    </label>
                  </li>
                </ul>
              </td>
            </tr>

            {/* warning variant */}

            <tr>
              <td className="py-5 px-4 align-top font-medium">warning</td>
              <td className="py-5 px-4 align-top">
                Use a warning (red) variant of the range to indicate values that
                are risky for a novice user to tweak.
              </td>
              <td className="py-5 px-4 align-top  font-mono text-sm opacity-60">
                false
              </td>
              <td className="py-5 px-4 align-top whitespace-nowrap">
                <ToggleBool
                  initialState={false}
                  control={(bool: boolean) => {
                    setRangeStyle(draft => {
                      draft.warning = bool
                    })
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default Docs

const LiList = (list: string[]) => {
  return (
    <ul className="text-sm mt-2">
      {list.map((item, index) => (
        <li key={item} className="inline-block font-mono opacity-60">
          {index > 0 && <span className="mx-2">|</span>}"{item}"
        </li>
      ))}
    </ul>
  )
}
