// React
/*

history:    
    --> Before react we had jQuery, BackboneJs, etc
    --> Why React was created:
        --> FB faced an issue (Fantom Message Problem)
            --> There was a notification on page which was counting new messages
            --> inside this icon we can see a dropdown which showed that this particular user sent 3-4-5-6 messages.
            --> from there user can open chatbox.
            --> Isuue was that now user read thos messages from that particular person
            --> but count was not decreasing
    --> How React was created:
        --> JS handles state; DOM handles UI.
        --> JS and DOM must be in sync. 
React:
    --> It makes easy to manage and build complex frontend.
        --> For basic pages it is not recommended to use React because ultimately this code compiles into HTML, CSS, JS.
    --> Useful when 2-3 components (part of page) should change with a event.
    --> Create a single page which does not reload. ***********************
React is a Library:
    --> Framework:
            --> strictly follow rules like naming convention of file, folder structure, data flow or fetch way
            --> no exception on rules
            --> Django, Nextjs
    --> Library: 
            --> get freedom to get the job done in multiple ways
            --> is shorter than framework

Topics to learn:
    --> Core of React 
        --> State
        --> UI Manipulation
        --> JSX
    --> Component Reusability
    --> Reusing of Components (props)
    --> How to propogate changes (hooks)

Addon to React
    --> router
        --> React don't have Router
    --> State Management (Earlier it was not there in React)
        --> Redux
        --> Redux toolkit
        --> Zustand
        --> Context API
    --> class based component (legacy/older code)
    --> BAAS Apps (Backend As A Service)
        --> Appwrite, firebase, superbase provide BAAS
            --> can create Social media clone, e-commerce app

After React:
    --> React does not created SEO optimized code
    --> Browser render of JS  --> browser gets JS and browser create HTML and CSS
        --> that's why browser is slow
    --> Alternatives frameworks which are created on React
        --> NextJs, Gatsby, Remix

--> We can write Backend and frontend in NextJs.
*/