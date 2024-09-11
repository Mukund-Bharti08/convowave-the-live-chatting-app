import React from 'react' 
import Add from "../images/icon1.png"



const Register = () => {
  return (
    <div className='form_container'>
        <div className='form_wrapper'>
            <spam className='logo'> CONVOWAVE </spam>
            <span className='title'> Let's get you Registered! </span>
            <form>
                <input type='text' placeholder='display name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input style ={{ display: 'none'}}type='file' id='file'/>
                <label htmlFor='file'>
                    <img scr = {Add} alt = ""></img>
                    <span>Add an avatar</span>
                </label>
                <button>SIGN UP</button>
            </form>
            <p> ALREADY HAVE AN ACCOUNT? </p>
        </div>
    </div>
  )
}

export default Register