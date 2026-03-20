import React, {useState, useContext} from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext) //getting "setUser" from specific context "UserContext"
    const handleSubmit = (e)=>{
        e.preventDefault() // when we click submit then value generally goes to post req which I am blocking
        setUser({username, password})
    }
    return (
        <div>
            <h2>Login Page</h2>
            <input type="text" placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
