/*
 # Context API:
      --> When we have some data in main App. And we want to use that in 3-4th layer in-depth. 
            -- then we will have to pass "props" to all middle components.
            -- this is called "Prop Drilling" --> We middle comps do not need this. 
      --> "Contaxt API":-> says that store those variable in a global space/object 
            -- main App set this in that
            -- and other components can access from there.

      --> Other libraries which does the same work:
            -- Redux   
            -- redux tool kit (RTK)
            -- Zustand
            -- react redux

      --> We create a "Context" folder there we can add multiple context file for specific context. 
            -- A context giver us a "provider" which will help us to get the val
            -- we wrap the component with this provider. 
            -- now all children can access it.

      --> Flow:
            1. We create a context for User "UserContext" --> this will have values
            2. provider for this context "UserContextProvider" --> this will behave like a wrapper. through this only we will access or change the value in context
            3. We wrapped Login and Profile in ContextProvider so that they can access the value
            4. Login will update the data and Profile will get the data


            Other way to use context provider is in theme.js file.


*/

