import React from 'react' 
import Add from "../images/icon1.png"

const Login = () => {
  return (
    <div className='form_container'>
        <div className='form_wrapper'>
            <spam className='logo'> CONVOWAVE </spam>
            <span className='title'> Let's get you Logged in! </span>
            <form>  
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                
                <button>SIGN IN</button>
            </form>
            <p> ALREADY DON'T HAVE AN ACCOUNT? REGISTER!!</p>
        </div>
    </div>
  )
}

export default Login;