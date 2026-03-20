import { createContext, useContext } from "react";

const ThemeContext = createContext({
    themeMode: "light", 
    darktheme: ()=>{},
    lighttheme: ()=>{},
})

//default export can be user only once.
const ThemeProvider = ThemeContext.Provider

function useTheme(){
    return useContext(ThemeContext)
}

export {useTheme, ThemeProvider}
// theme Provider can be used as wrapper
// useTheme can be used at place of "const { setUser } = useContext(UserContext)"

// Provider value={{theMode, darktheme, lighttheme}}
// Jaha provider kr rhe hai waha "thememode" ki useState banao.
// 2 function create kro "return" se pahle with same names as in values.
//jab same name hota hai to wo automatically uski ko samajhte hai