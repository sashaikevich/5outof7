import React, { createContext, useContext, useRef, useState } from "react"
import { INITIAL_CONFIG } from "../components/d"

import { PhantomSetupFieldsMap, PhantomSetupKeys } from "../components/d"

import { useImmer } from "use-immer"

interface SetupContextType {
  data: typeof INITIAL_CONFIG
  updateField: <K extends keyof PhantomSetupFieldsMap>(
    field: K,
    value: PhantomSetupFieldsMap[K]
  ) => void
}

export const SetupContext = createContext<SetupContextType>(
  {} as SetupContextType
)

interface SetupContextProviderProps {
  children: React.ReactNode
}

export const SetupProvider = ({ children }: SetupContextProviderProps) => {
  const [data, setData] = useImmer<typeof INITIAL_CONFIG>(INITIAL_CONFIG)

  function updateField<K extends PhantomSetupKeys>(
    field: K,
    value: PhantomSetupFieldsMap[K]
  ): void {
    setData(draft => {
      draft[field] = value
    })
  }

  return (
    <SetupContext.Provider
      value={{
        data,
        updateField,
      }}>
      {children}
    </SetupContext.Provider>
  )
}

export const useSetupContext = () => {
  return useContext(SetupContext)
}
