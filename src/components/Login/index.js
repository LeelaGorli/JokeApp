import {useState} from 'react'
import Home from "../Home"

export default function Login() {
    const loginDetails = {
        username: "Leela",
        password: "Leela123"
    }
    const [name,setName] = useState("");
    const [pass,setPassword] = useState("");
    const [errorMsg, setError] = useState("");
    const [isLogin,toLogin] = useState(false)
  

    const changeName = (event) => setName(event.target.value);
    const changePass = (event) => {
      setPassword(event.target.value)
    }

    const submitForm = (event) => {
      event.preventDefault()
      if (name === "" || pass === ""){
        setError("*Required Login Details")
      }else if (name !== loginDetails.username){
        console.log(name)
        setError("*Invalid Username")
      } else if (pass !== loginDetails.password){
        setError("*Invalid Password")
      } else{
        setError("")
        toLogin(true)
        setName("")
        setPassword("")
      }
    }
    const toLogOutPage = () => {
      toLogin(false)
    }
      return (
        isLogin ? (<Home toLogOut={toLogOutPage} />) : (
          <div className="App d-flex flex-column align-items-center p-5">
            <div className="credential-container border p-3">
              <h1 className="login-heading mb-4">Login Details</h1>
              <p className="paragraph">Usename: {loginDetails.username}</p>
              <p className="paragraph">Password: {loginDetails.password}</p>
            </div>
            <form onSubmit={submitForm} className='shadow login d-flex flex-column align-items-start p-5 mt-4'>
              <h1 className='heading align-self-center'>Login</h1>
              <label className='text-secondary' onChange={changeName} htmlFor="username">Username:</label>
              <input className='input w-100 mb-2' onChange={changeName} placeholder='username' type="text" value={name} id="username" />
              <label className='text-secondary' htmlFor="password">Password:</label>
              <input className='input w-100' onChange={changePass} placeholder='password' value={pass} type="password" id="password" />
              <button type="submit" className='btn btn-primary mt-3 align-self-center'>Login</button>
              <p className='text-danger align-self-center'>{errorMsg}</p>
            </form>
          </div>
        )
      );
}