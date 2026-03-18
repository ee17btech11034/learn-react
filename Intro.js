/*

Creating Our Own React type Library:
    --> index.html:
        --> create a div with id "root" as we will manipulate this "div"
        --> load  js script
    
    --> script.js:
        --> ultimately react see/read this code in JSON or Object structure as "reactElement"
            --> "reactElement" tells that i want data in this form
        --> We need a function to create DOM Element from "reactElement"

React create reactElement type graph or JSOn and whenever needed it just create the element and render it

Let's check this in vite:
    --> check main.jsx file `npm run dev`
    
    --> the way we are adding and returning function in JSX. 
    --> vite, webpack is a bundler

    --> Babel:
        --> it is not a bundler. 
        --> It is a JavaScript compiler (transpiler) that transforms modern JavaScript (and syntax extensions like JSX) into backward-compatible JavaScript that browsers can understand.
        --> When Babel processes JSX, it does not convert it into JSON or key-value pairs by default. Instead, it transforms JSX into React.createElement() calls (or equivalent functions, depending on the runtime).
            --> <h1 className="title">Hello</h1>
                                ||
                                || Babel (JS compiler / transpiler)
                                ||transform it into
                                ||
                React.createElement('h1', { className: 'title' }, 'Hello');


Journey JSX to Page:
    --> 1. write a function component with JSX
            -- function MyComponent() {
                    return <h1 className="title">Hello</h1>;
                }
    --> 2. JSX →→→→ React.createElement()
            --> It is called Transpilation
            --> Babel (or SWC or esbuild [es is faster]) transform JSX into Standard JS code.
            --> Process:
                    --> Parse JSX into Abstract Syntax Tree (AST)
                    --> Transform AST node (<h1> --> react.createElement)
                    --> Generate standard JS code
            -- function MyComponent() {
                    return React.createElement('h1', { className: 'title' }, 'Hello');
                }
            --> react.createElement is a react method but still everything else is JS code and will runwithout error so that's why it is standard JS.
    --> 3. React.createElement() -----> React Element (Plain Object)
            --> Called Element Creation phase and done by "React runtime" (react package)
            -->The function call returns a React element — a lightweight description of the DOM node:
                --> {
                        type: 'h1',
                        props: {
                            className: 'welcome',
                            children: 'Hello'
                        }
                    }

            --> This is part of Virtual DOM, not real DOM
            --> Faster to create, easy to diff
        
    --> 4. Render & reconciliation Phase (React fiber)
            --> React (internal Fiber Architecture) is used
                --> `ReactDOM.render()` or `createRoot().render()`

            --> Process:
                --> react call component ---> gets react elements
                --> Compare new tree with previous (via Fiber Reconciler)
                --> Determine minimal DOm changes needed
            --> Steps:
                --> Render phase (diffing): bild new Virtual DOM tree
                --> Reconciliation: Compare old vs new V-DOm (using keys, types)
                --> Diff Algorithm: Identify insertions, updates, deletions.

    --> 5. Commit to DOM (DOM Manipulation / Mutation)
            --> it is commit phase and done by "react-dom"
            --> React applies changes to actual browser DOM
                --> creates, updates, or remove real DOM Nodes
                --> Attach eveny listners
            --> converts to
                    document.createElement('h1')
                    h1.className = 'welcome'
                    h1.textContent = 'Hello'
                    rootElement.appendChild(h1)
            
    --> 6. Browser Rendering (Painting)
        --> browser paints pixels on screen
        --> Steps:
            --> Style: Apply CSS
            --> Layout: Calculate positions
            --> Paint: Draw pixels
            --> Composite: Layer elements
        --> Tools used: Browser rendering engine (e.g  Blink, WebKit)
        --> Performance tip: Minimize re-renders and layout thrashing.

    --> 7. Development & build Tools Pipeline
        --> Build/Serve Phase
        --> Development (Dev Server):
                --> Vite / Webpack Dev Server: Serves code, enables HMR
                --> Hot Module Replacement (HMR): Updates UI without full reload
        --> Production Build:
                --> Bundler: Webpack, Vite, esbuild
                --> Babel/SWC: Transpile + minify
                --> Tree-shaking: Remove unused code
                --> Code splitting: Lazy-load components
        --> Output: Optimized static files (index.html, main.js, style.css)


Summary Flow:
        JSX → Babel → React.createElement() → React Element → Reconciliation → Commit → Real DOM → Browser Rendering   


React Github:
    --> fb/react
        --> scripts > babel


*/      