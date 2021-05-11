import React, {createContext,} from 'react'
import useToggleState from '../hooks/useToggleState'

// must have access to this context to consume it
export const ThemeContext = createContext()
//component returns themecontext.provider
// provides data and methods that are in the provider to components that are wrapped in the provider
export const ThemeProvider =(props) => {
//use custom hook to set state and to provide function to toggle it
const [isDarkMode,toggleTheme] = useToggleState(false)
// don't need to pass down the toggletheme function, you can just pass down the toggle
//function from the custom hook
// toggles darkmode to the opposite of what it is currently at
//    const toggleTheme =()=>{
//         toggle()
//     }
        // everytime you run a context you get a provider
        // components passed into themeprovider in app componets will have access to the state and methods that the provider provides
        // value will be passed to the children props
        //value will contain state and methods that are assigned to it
        // value should be passed as an object with desired state or methods
        // key and value are passed as a single variable in the object per es6
        return (
        <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
        {props.children}
        </ThemeContext.Provider>
        ) 

    
}