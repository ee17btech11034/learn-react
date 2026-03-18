import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
/*
function MyApp(){
  return (
    <div>
      <h1> Custom App | Raja</h1>
    </div>
  )
}

const ourCustomElement = {
    type: 'a', // type of element like div, li, ul, p, etc.
    props: {
        href: 'google.com',
        target: '_blank',
    },
    children: 'Click me to visit',
}

*/
// const reactElement1 = (<a href='https://google.com' target='_blank'>click on reactElement - 1</a>)

/*
const reactElement2 = React.createElement('a', 
                      {href: 'https://google.com',
                        target: '_blank'
                      },
                      'click on reactElement - 2'
                    )
const reactElement3 = React.createElement('a', 
                      {href: 'https://google.com',
                        target: '_blank'
                      },
                      'click on reactElement - 2',
                      name, other_variables_in_end
                    )
*/

createRoot(document.getElementById('root')).render(
  // <MyApp/> //It is working
  // MyApp() //It is also working but not recommended

  // ourCustomElement // no error but did not show any content because "React expects a proper format"

  // reactElement1 // working perfectly fine

  // reactElement2 // it is working fine as wll


  // lets talk about Variable
  <App/>
)
