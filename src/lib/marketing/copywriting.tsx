"use client"
import React from "react"

import ptBr from "./ptBr.json"

type Lang = "ptBr" | "en" | "it"

type Script = {
  menus: {
    produto: string[],
  },
  FAQ: {
    pergunta: string,
    resposta: string
  }[]
}

interface IContext {
  lang: Lang
  toggleLang: (lang: Lang) => void
  get_script: () => Script
}

const Context = React.createContext<IContext>({
  lang: "ptBr",
  toggleLang: () => { },
  get_script: () => ptBr
})

const defaultLang: Lang = "ptBr"

export const CopywritingProvider = ({ children }: React.PropsWithChildren) => {
  const [lang, setLang] = React.useState<Lang>(defaultLang)
  const [scripts] = React.useState<Record<Lang, Script>>({
    "ptBr": ptBr,
    "en": ptBr,
    "it": ptBr
  })

  const toggleLang = (newLang: Lang) => {
    setLang(newLang)
  }

  const get_script = () => {
    const res = scripts[lang]
    if (res == null || typeof res !== "object") {
      toggleLang(defaultLang)
      return scripts[defaultLang]
    }
    return res
  }

  return (
    <Context.Provider value={{
      lang,
      toggleLang,
      get_script
    }}>
      {children}
    </Context.Provider>
  )
}

export const useCopywriting = () => {
  const context = React.useContext(Context)

  if (!context) {
    throw new Error("")
  }
  return context
}