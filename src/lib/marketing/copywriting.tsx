"use client"
import React from "react"

import ptBr from "./ptBr.json"
import en from "./en.json"

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
  getInternationalScript: () => Script
}

const Context = React.createContext<IContext>({
  lang: "ptBr",
  toggleLang: () => { },
  get_script: () => ptBr,
  getInternationalScript: () => en
})

const defaultLang: Lang = "ptBr"
const internationalScript: Lang = "en"

export const CopywritingProvider = ({ children }: React.PropsWithChildren) => {
  const [lang, setLang] = React.useState<Lang>(defaultLang)
  const [scripts] = React.useState<Record<Lang, Script>>({
    "ptBr": ptBr,
    "en": en,
    "it": ptBr
  })


  const getInternationalScript = () => {
    return scripts[internationalScript]
  }

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
      get_script,
      getInternationalScript
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