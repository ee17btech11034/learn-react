/*
 #Projects:
    --> Currency converter reat time using api.
    --> We can use any api. Here we will be using "https://github.com/fawazahmed0/exchange-api" or can find similar api free source
               --> https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json

 # Custom hooks:
   --> a hook return [val, fn]
   --> custom hooks can use built-in hooks

 # Important notes:
   --> `onChange={(e)=> onAmountChange && onAmountChange(e.target.value)}` Here 
         --> we need to check that "onAmountChange" is given to this. so we just put an check
         --> sometimes 'e.target.value' returns a string as an output which creates bugs

   --> When we are using loop in JSX then better to use key there so that React can identify them seperately.
         --> we can take "id", values we are passing if they are unique

   --> When we have many components in any folder like "hooks", "components", etc.
         - better to create an 'index.js' file in that folder and import all these functions in this
         - Now we can just import this file. 
         - This way our code will be clean. 

   --> useId hook:
         - read about it.
*/

