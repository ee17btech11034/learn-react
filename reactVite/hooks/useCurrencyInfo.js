// We named it JS because until we are returnign JSX content we can use .js.

import { useEffect, useState } from "react";


// a function which is returning [var, fn] is a hook
// its recommended that we should use "use" keyword as a prefix for hooks
/*
function useTestMethod(initialVal){
    let val = initialVal;
    const setVal = (newVal)=>{val = newVal}

    return [val, setVal]
}


--> Obviously it is not proper React hook as it is just updating a variable.
--> Here no retrigger, no re-render, etc. 
--> It is just to show hoe we return [val, function]
*/

function useCurrencyInfo(currency, specificDate= 'latest'){
   // we will need to call this function as soon as compinent gets mount then "useEffect" is the best guy.
   const currrencyFetchAPI = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${specificDate}/v1/currencies/${currency}.json`;

   const [currencyJson, setCurrencyJson] = useState({})
    useEffect(()=>{
        fetch(currrencyFetchAPI).then((data)=>(data.json())).then((data)=>(setCurrencyJson(data[currency])))
    }, [currency])

    return currencyJson // instead of returning [currencyJson, setCurrencyJson] we are returning this because we will export this whole function
}

export default useCurrencyInfo;