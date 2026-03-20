/*
 # React Router:
      --> https://reactrouter.com/start/framework/installation 
      --> Like we get hfunctionality with react like hooks (useState, useEffect), etc.
            --> same way we get some functionality with 'react-router-dom'
               --> Link: we use this inplace of 'a' tag bcz in 'a' case page is refreshed. React doess not support refresh
               --> NavLink: this has some additional functionality that Link like
                           -- we can give function in this
                           -- NavLink className={({isActive})=> 'className1' {isActive ? 'colorActive : }}
                           -- Here we can see set the color of current Navbar which is open 

      --> Steps:
         --> Install 'react router dom':--> `npm install react-router-dom`
         --> Created components
         --> Now we will have to use 'react router' in  'main.jsx' 
         --> We want that Header and Footer will be same always. only mid content will be changed. 
               --> 2 ways to achive this
                  --> 1. we call Header and Footer in all components. ==> Not optimized
                  --> 2. We create a Layout and change the middle content ==> optimized (Root.jsx or Layout.jsx)
         --> When we create Layout then we use "outlet" to tell that this will change 
         --> this Outlet will be changed using router in main.

   Important:
      --> Suppose we want to fetch some data from a link. 
      --> We will use "useEffect" as this runs whenever component state changes like mount, unmount, update, etc. 
            -- which may take sometime. 
      --> React and next js provide a method 'loader':
            -- when user hover mouse over that component link (About 9assuning about has some fa=etch calls)
            -- it will start to fetch the date and cache it.
*/

