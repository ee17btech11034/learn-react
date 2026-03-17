/*

Project using create-react-app Vs vite:
    --> create-react-app:
        --> menifest file:
            --> it is for mobile devices to text on mobile, we use this file to check the metadeta
        --> index.html
            --> Single file that's why its called SPA (Single Page Application)
            --> Behind the scene everything is DOM manipulation
            --> it is using "main.jsx"
            --> No script is attached in it then how .js or .jsx got added in here
                --> "react-scripts" are responsible for this, they are smart.
        --> App.js will not throw error but app.jsx will as first character must Capital ************** 
    --> vite
        --> script is added in index.html file
        --> file ka name ".js" par error dega so use ".jsx"
        --> It will throe error for small things like ( app.js) -> App.jsx
    
React:
    --> JSX provide functionality to create customized tags, JS XMl
    --> JSX exapt only one tag as return
    --> React introduced "fragment <>" to return multiple tags in this.

*/