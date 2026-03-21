/*

 # Project:
      - create a to-do app.
      - user can give the title and description, 
      - each box (show only title) has 3 options edit, arrow key to change order, delete.
      - eidt clicked, there only it showes that user is editing
 
 # Redux toolkit:
      --> https://redux-toolkit.js.org/
      
      --> Redux is "State Management library"
          --> To use it in react we have "react-redux" , it is just a bridge between lang and redux
      --> Flux (by FB) was old one then Context API  then redux came 
          --> Flux:
               -- Have a common storage
               -- Data flow was not structured 
          --> Redux:
               -- Single source of truth (Single store)
               -- State must be read only
               -- changes should be made through function (pure functions) which are called "Reducer"
               -- It should have a proper flow
               -- Time taking for setup. 
                    -- addons came "redux Thang" "redux saga"
               -- To solve these issue they introduced "redux-toolkit"
                    -- Abstraction is increase
                    -- easy way to create a store
                    -- built-in middleware available
                    -- slicer is they way for reducers
               
               -- components:
                    -- Store
                    -- reducers
                    -- useSelector
                    -- useDispatch
               
               -- Install:
                    -- ` npm install @reduxjs/toolkit`
                    -- `npm install react-redux`

               -- creation:
                    -- we create a store.js --> we can create it anywhere
                    -- Create reducers:
                         -- we call them slices
                         -- create a folder "Features" for reducers.
                              -- we can have multiple features like "login", 'logout", "toDo" etc
                         -- In context APi we were just declaring fn but here we define as well


               -- inspect > redux 9parallel to console)     
                         -- there will be a proper summary 

     # After this: We are building Blog application. GO to repos: https://github.com/ee17btech11034/blog-application 
     # then you can continue from here.
*/

