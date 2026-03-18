import { useState, useCallback, useEffect, useRef } from "react"

function App(props) {
  const [passLength, setPassLength] = useState(0)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")//we will generate on runtime

  // useRef
  const passwordRef = useRef(null)

  // const passGenerator = ()=>{}// normal function
  // const passGenerator = useCallback(fn, [passLength, numAllowed, charAllowed, password]) // deps array
  const passGenerator = useCallback(()=>{
    let pass = ""
    let input_str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    input_str +=  (numAllowed ? "0123456789" : "")
    input_str = charAllowed ? (input_str + "!@#$%^&*()_+{}?<>") : input_str

    const inputlength = input_str.length

    for (let i = 0; i < passLength; i++) {
      const ind = Math.floor(Math.random() * inputlength)                 //[0, 1) *in_len
      pass += input_str[ind]
    }

    setPassword(pass)
  }, [passLength, numAllowed, charAllowed, password])
  
  // passGenerator() // can not run this way -> infintite loop in react
      // we will use "useEffect" hook
  useEffect(()=>{
    passGenerator()
  }, [passLength, numAllowed, charAllowed])


  const copyToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password) // here we did not use any passwordRef. 
    // we use ref to make some changes like "copied" or "highlight text" etc
    passwordRef.current?.select() // when I will click on button then password text will be highlighted
    passwordRef.current?.setSelectionRange(0, 3) // it will just highlight first 3 characters of password

  }, [password])
  return (
    <>
      <h1>password Generator by {props.name} using React Vite </h1>
      <input type="text" value={password} placeholder="generated password" ref={passwordRef}></input>
      <button onClick={copyToClipboard}>Copy</button>
      <div>
        <input type="range" min={6} max={25} id="range" value={passLength} style={{cursor: "pointer"}} onChange={(e)=>{setPassLength(e.target.value)}}/>
        <label htmlFor="range">Length: {passLength}</label>
      </div>
      <div>
        <input type="checkbox" id="number" onChange={()=>{setNumAllowed((prev)=> (!prev))}}/>
        <label htmlFor="number">Number</label>
      </div>
      <div>
        <input type="checkbox" id="character"  value={false} onChange={()=>{setCharAllowed((prev)=>(!prev))}}/>
        <label htmlFor="character">Characters</label>
      </div>
    </>
  )
}
export default App
