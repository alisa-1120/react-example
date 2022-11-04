import React,{useState,useEffect} from 'react'
import { TranslationsContext } from './translationsContext'
import { allLanguages,EN,ZHCN } from '../../config/localisation/languageCodes'

const CACHE_KEY = 'pancakeSWAPLanguage'

export interface LangType{
    code:string
    language:string
}

export interface LanguageState{
    selectedLanguage:LangType
    setSelectedLanguage:(langObject:LangType) => void
    translatedLanguage:LangType
    setTranslatedLanguage:React.Dispatch<React.SetStateAction<LangType>>
}

const LanguageContext = React.createContext({
    selectedLanguage:EN,
    setSelectedLanguage:() => undefined,
    translatedLanguage:EN,
    setTranslatedLanguage:() => undefined
} as LanguageState)


const LanguageContextProvider = ({children}) => {
    
    const [selectedLanguage,setSelectedLanguage] = useState<any>(EN)
    const [translatedLanguage,setTranslatedLanguage] = useState<any>(EN)
    const [translations,setTranslations] = useState<Array<any>>([])


    const getStoreLang = (storedLangCode:string) => {
    return allLanguages.filter((language) => {
        return language.code === storedLangCode
    })[0]
    }

    useEffect(() => {
        const storedLangCode = localStorage.getItem(CACHE_KEY)
        if(storedLangCode){
            const storedLang = getStoreLang(storedLangCode)
            setSelectedLanguage(storedLang)
        } else {
            setSelectedLanguage(EN)
        }
    },[])
    
    useEffect(()=>{
        if(selectedLanguage){
            fetch(`./i18n/${selectedLanguage.code}.json`)
              .then((r) => {
                return r.json()
              })
              .then((translationApiResponse) => {
                // console.log(translationApiResponse.data)
                if (translationApiResponse.data.length < 1) {
                  setTranslations(['error'])
                } else {
                  setTranslations(translationApiResponse.data)
                }
              })
              .then(() => setTranslatedLanguage(selectedLanguage))
              .catch((e)=>{
                 console.error('ERROR')
                 console.error(e)
                 setTranslations(['error'])
              })
        }
    },[selectedLanguage,setTranslations])

    const handleLanguageSelect = (langObject:LangType) => {
        setSelectedLanguage(langObject)
        localStorage.setItem(CACHE_KEY,langObject.code)
    }

    return(
        <LanguageContext.Provider value={{selectedLanguage, setSelectedLanguage: handleLanguageSelect, translatedLanguage, setTranslatedLanguage}}>
           <TranslationsContext.Provider value={{ translations, setTranslations }}>{children}</TranslationsContext.Provider>
        </LanguageContext.Provider>
    )

}

export {LanguageContext,LanguageContextProvider}