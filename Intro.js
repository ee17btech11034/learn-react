/*
    # Virtual Dom:
        --> Light weight tree
        --> React does not use V-DOM directly, internal functanality has been changed
        --> React.createRoot 
                --> create a DOM and compare with older one
                --> this DOm is virtual 
        --> Browser DOM:
                --> Browser also creates DOM
                --> Repaint the pixels according to changes
                --> It is Page Reloading or rendering
        
    # Fiber:
        --> Read https://github.com/acdlite/react-fiber-architecture
        --> Suppose we are tracking some network request:
            --> which will have 3- 4 states. Like will stablish connection, receive headers, receive body, confirmation message, etc.
            --> Earlier in react, React used to reflect changes instantly. 
            --> Now here we can see i will update this UI component frequently whereas 
                --> If I can wait then I will wait for sometime and then I will show the current state. which will save frequent re-renders. 
            --> Think of this in a complex frontend where multiple nextwork calls are updating UI.

        --> React people said we will use Fiber to handle these.
        --> Virtual DOM is created and then Fiber handles things by comparing only the changed components
    
    # hydration:
        --> HTMl, CSS is loaded and page layout is done
        --> But JS file is still coming to browser.
        --> This situation where JS file is not present yet --> called Hydration.
        --> in this, buttons will be there but we can not use them
    
    # Reconciliation:
        --> algo which diff the V-DOM.
        --> react decides which one will re-render.
        --> Cases:
            --> different component type will be totally updated.
            --> diff of list is performed by "keys"


            --> If fiber is going to make change to DOm and in that time state is changed then it will drop that DOm work and do the necessary steps to show new data.
*/