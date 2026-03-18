function App(props) {
  // console.log(props);// {} empty object if props are not given to App
  
  return (
    <>
      <h1>Hello from React Vite </h1>
      <p>name: {props.name}</p>
    </>
  )
}
export default App
