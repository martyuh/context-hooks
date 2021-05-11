import React, {createContext,useState} from 'react'


export const LanguageContext = createContext()

export const LanguageProvider = (props) => {
const [language,setLanguage] = useState('english')
//extract the event value from the select menu
  const changeLanguage = (e) =>{
        setLanguage(e.target.value)
    }
    return(
        // key and value are passed as a single value per es6
        <LanguageContext.Provider value={{language,changeLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    )
}
