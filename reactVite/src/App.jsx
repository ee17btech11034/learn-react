/*
function App() {
  let counter = 0;
  function incrementCounter(){
    // counter += 1 // warning that can not reassign variable after render
    counter++; //now that warning is gone
    console.log("Counter: ", counter)
  }
  function decrementCounter(){
    counter -= 1
    console.log("Counter: ", counter) // updating counter on console but not rendering on page
  }
  return (
    <>
      <h1>Hello from React Vite </h1>
      <p> Counter: {counter}</p>
      <button onClick={incrementCounter}>Inc</button>
      <button onClick={decrementCounter}>Dec</button>
    </>
  )
}

*/

import {useState } from 'react';

/*
function App() {
  let counter1 = 0;
  let counter2 = useState(0) //initial value is zero

  function incrementCounter(){
    counter1++; 
    counter2 ++;
    console.log("Counter1: ", counter1)
    console.log("Counter2: ", counter2) // counter 2 ==> NaN
    // counter2 becomes NaN (Not a Number) is because useState does not return a number — it returns an array containing two elements:
                // --> 1. The current state value.
                // --> 2. A function to update that state (the setter function). 
  }
  function decrementCounter(){
    counter1 -= 1
    counter2 -= 1
    console.log("Counter1: ", counter1) 
    console.log("Counter2: ", counter2) 
  }
  return (
    <>
      <h1>Hello from React Vite </h1>
      <p> Counter1: {counter1}</p>
      <p> Counter2: {counter2}</p>
      <button onClick={incrementCounter}>Inc Counter1: {counter1}, Counter2: {counter2}</button>
      <button onClick={decrementCounter}>Dec Counter1: {counter1}, Counter2: {counter2}</button>
    </>
  )
}

*/


//mutate state
/*
function App() {
  let counter1 = 0;
  let [counter2, setCounter2] = useState(0); //initial value is zero

  function incrementCounter(){
    counter1++; 
    counter2 ++;
    console.log("Counter1: ", counter1) // val increasing 
    console.log("Counter2: ", counter2) // val increasing
    //counter1, counter2 are increasing parallely: 1 1, 2 2, 3 3, etc bcz koi state nhi hai so not re-rendering
      // --> if no re-render then JS variables holds their value
  }
  function decrementCounter(){
    counter1 -= 1
    counter2 -= 1
    setCounter2(counter2) // rerender this state --> it takes some time
    console.log("Counter1: ", counter1) 
    console.log("Counter2: ", counter2)
  }
  return (
    <>
      <h1>Hello from React Vite </h1>
      <p> Counter1: {counter1}</p>
      <p> Counter2: {counter2}</p>
      <button onClick={incrementCounter}>Inc Counter1: {counter1}, Counter2: {counter2}</button>
      <button onClick={decrementCounter}>Dec Counter1: {counter1}, Counter2: {counter2}</button>
    </>
  )
}
*/


//proper usestate 
/*
function App() {
  let counter1 = 0;
  const [counter2, setCounter2] = useState(0); //initial value is zero

  function incrementCounter(){
    counter1++; 
    console.log("Counter1: ", counter1) // always --> 1    rerender sets to 0 and incre to 1
    console.log("Counter2: ", counter2) 
    setCounter2(counter2 +1) // counter2  increasing here
    //counter1, counter2 : 1 0, 1 1, 1 2, etc bcz koi state nhi hai so not re-rendering
      // --> if render then JS variables are reset
  }
  function decrementCounter(){
    counter1 -= 1
    setCounter2(counter2 => (counter2 -1)) // rerender this state --> it takes some time
    console.log("Counter1: ", counter1)  // Always  -1
    console.log("Counter2: ", counter2) // decreasing
  }
  return (
    <>
      <h1>Hello from React Vite </h1>
      <p> Counter1: {counter1}</p>
      <p> Counter2: {counter2}</p>
      <button onClick={incrementCounter}>Inc Counter1: {counter1}, Counter2: {counter2}</button>
      <button onClick={decrementCounter}>Dec Counter1: {counter1}, Counter2: {counter2}</button>
    </>
  )
}

*/

// use state with min and max
function App() {
  const [counter, setCounter] = useState(0); //initial value is zero
  const upperLimit = 20;
  const lowerLimit = 0;

  function incrementCounter(){
    /*
    // this also works
    setCounter((counter)=>{
      if ((counter +1) > upperLimit){
        return counter
      }
      else{
        return counter +1;
      }
    })

    */
    setCounter(Math.min(upperLimit, counter +1))
  }
  function decrementCounter(){
    /*
    //this also works
    setCounter((counter)=>{
      if ((counter -1) < lowerLimit){
        return counter
      }
      else{
        return counter -1;
      }
    })
    */
   setCounter(Math.max(lowerLimit, counter-1))
  }
  return (
    <>
      <h1>Hello from React Vite </h1>
      <p> Counter: {counter}</p>
      <button onClick={incrementCounter}>Inc Counter: {counter}</button>
      <button onClick={decrementCounter}>Dec Counter: {counter}</button>
    </>
  )
}
export default App
