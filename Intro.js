/*
 # props:
    --> props are like argument
    --> "props" is the keyword set by react.
    --> we can pass anything in this    `<Func name="Raj"/>  <App name="Raj" name2={myObj} name3={myArr}/> like this



 # tailwindCSS:
    -->


 # react Strict Mode:
        --> In development mode, 
            --> React Strict Mode intentionally mounts and renders components twice (for function components) to help detect side effects and unsafe lifecycle patterns.
                    --> Find side effects in render logic (e.g., mutating variables, setting timers, logging).
                    --> Ensure your components are pure: the same inputs always produce the same output, with no unintended mutations. 
                    --> Encourage resilient code that works under React’s concurrent rendering.

                    --> Examples:
                        --> Like we define 2 variables one inside and one outside function component
                        --> count ++ in function,
                        --> it is incosistent behaviour for React
                            --> react will re-render twice and compare output for both. IOf same means correct UI.
                                --> No mutation of external variables.
                                --> Same input (guest={1}) → same output every time.
                                --> Safe for React to re-render multiple times. 
        --> This does not happen in production.

 

*/


/*
Bad code found by strict mode:



        let guestCount = 0;

        function Cup() {
        guestCount++; // 🔴 Side effect! Mutating outside variable during render
        return <h2>Tea cup for guest #{guestCount}</h2>;
        }

        function App() {
        return (
            <div>
            <Cup /> <Cup /> <Cup />
            </div>
        );
        }
*/

/*
Fixed this code:

        function Cup({ guest }) {
        return <h2>Tea cup for guest #{guest}</h2>;
        }

        function App() {
        return (
            <div>
            <Cup guest={1} />
            <Cup guest={2} />
            <Cup guest={3} />
            </div>
        );
        }   

*/




/*
 Question on Counter:
    --> in increement function: we write this
        const [counter, seCounter] = useState(20)

        --> setCounter(counter+1)
        --> setCounter(counter+1)
        --> setCounter(counter+1)
        --> setCounter(counter+1)

        console.log(counter) // 21  only
            ==> Here useState make the batches of that state and then apply those changes.
                --> When useState look at this then it finds all are doing same thing
                --> It will just keep one val
                    
                
                
                VS

    --> in increement function: we write this
        const [counter, seCounter] = useState(20)

        --> setCounter((prevCount)=> prevCount+1) //it is saying take the previous state and then update it.
        --> setCounter(prevCount=> prevCount+1) // it canme them anything we want just maintain consistancy
        --> setCounter(prevCount=> prevCount+1)
        --> setCounter(prevCount=> prevCount+1)

        console.log(counter) // 24      ---> direct (+4)
            ==> Here useState make the batches of that state and then apply those changes.
                --> When useState look at this then it finds all are doing same thing
                --> It will just keep one val

*/