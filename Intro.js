/*

Hooks:
    --> Create a counter with variable as let and state.

Counter with variable:
    --> JS is updating counter but DOM is not reacting to it.
    --> react does this job but its own way

React need:
    --> Suppose I want to show this counter value in 
        --> "counter para" :=>  <p> Counter: {counter}</p> 
        --> increment :=>  <button onClick={incrementCounter}>Inc {counter}</button>
        --> decrementfunc :=>  <button onClick={decrementCounter}>Dec {counter}</button>
        --.somewhere in footer: => somewhere using `{counter}`
    --> I will have to take the reference using queryselector and then run these methods on all of these to update the DOM.

--> React controls the UI and JS control the variables. 
    --> Hooks provide the functionality to React or JS to be in sync to rerender that particular component
    --> Data update only through hooks to track by react
    --> Once component rerenders then JS variable "reassigned the initial val" whereas state keep their state

--> useState Hook:
    --> built-in React Hook that lets you add state to functional components.
    --> const [state, setState] = useState(initialValue);
        --> state: Current state value.
        --> setState: Function to update the state.
        --> initialValue: Initial value (can be any type — number, string, object, array, etc
    --> Important:
        --> Always destructure the array returned by useState. 
        --> Never mutate state directly (e.g., count++).  Always use the setter (setCount).
        --> State Updates Are Asynchronous
            --> State updates do not reflect immediately. 
            --> React batches updates for performance.
    --> Rules:
        --> Only call at the top level — not inside loops, conditions, or nested functions. 
        --> Call in the same order on every render. 
        --> Use custom Hooks to reuse stateful logic.
    --> Best pratice:
        --> Use multiple useState calls for unrelated values.
            --> const [data, setData] = useState(() => heavyCalculation());     ==> valid
        --> Use functional initialization for expensive computations:
            --> useState(obj/array/val) but                useState(function) is not optimized 
        --> Avoid unnecessary state — only store what affects rendering.
    
--> Mutate State:
    --> In this App we used
        --> let [counter, setCounter] = useState(0)
            --> counter++
            --> setCounter(counter)
    --> Issues here:
        --> 1. You're mutating state directly:
                --> you're still mutating a value that should be treated as immutable.
                --> because here UI got re-rendered because of I think "onclick" function on button. 
                --> Or else there is no way react can find that state got updated.
        --> 2. Breaks Pure Components & Optimizations:
                --> If your component or child components use React.memo, useMemo, or PureComponent, 
                        they rely on reference equality. Direct mutation can cause incorrect behavior or missed updates.
        --> 3. Fragile and Confusing and not future proof:
                --> This pattern makes code harder to reason about. 
                --> Future developers (or you) might assume it's safe to mutate state elsewhere, leading to bugs
    --> write these:
        --> const [counter, setCounter] = useState(0) //making counter as immutable
        --> setCounter(counter + 1); // Better
                    // or
            setCounter(counter => counter + 1); // Best (functional update)

--> No taking reference of DOm elements and then update. Just make this state and let React handle everything
*/      