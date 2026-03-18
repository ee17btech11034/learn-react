/*
 #Projects:
    --> i have a slidbar with Number and character checkbox
    --> while I side it is generating a random text of that length.

        --> set all the variables as an state. created password as an state to get the latest data. 
        --> Now we need an password generator function:
            --> But here issue is we have 3 buttons or input field -> length, character, number
            --> either we call this function on these 3 
            --> or if we have something which can remember the function definition between re-render
                --> use useCallbacks
                    --> takes 2 args -> function, deps array
 # useEffect:
    --> Synchronize component with external function.
    --> used in component lifcycles, at demount of comp, 
    --> runs whenever there is any change in list of deps
    

 # useRef:
    --> We want password to be copied in clipboard whenever we click on COPY button 
    --> both buttons and input field are in different place. So we use reference to get that value.
    --> create `const passwordRef = useRef(null)` and then `ref={passwordRef}`  gives into button 

 # useCallback:
    --> let us cache the function definition between re-renders
    --> function definition ko cache/memory me rakh lo
    --> It is useful to optimize as it cache the function defineition means all states and all it cache these.



*/