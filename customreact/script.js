const reactElement = {
    type: 'a', // type of element like div, li, ul, p, etc.
    props: {
        href: 'google.com',
        target: '_blank',
    },
    children: 'Click me to visit',
}

/*
function customRender(reactElement, container){
    const newElement = document.createElement(reactElement.type) //creating tag
    newElement.innerHTML = reactElement.children
    newElement.setAttribute('href', reactElement.props.href)
    newElement.setAttribute('target', reactElement.props.target)

    container.appendChild(newElement)
}

Let's use loop based code for more feasibility
*/

function customRender(reactElement, container){
    const newElement = document.createElement(reactElement.type) //creating tag
    newElement.innerHTML = reactElement.children // sometimes children is in props. use if-else
    for (const key in reactElement.props) {
        if (key === 'children') continue; //as we do not have in props else we would need to handle it
        newElement.setAttribute(key, reactElement.props[key])
    }

    container.appendChild(newElement)
}

const div_container = document.querySelector("#root")

customRender(reactElement, div_container)