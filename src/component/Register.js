import React, { useState } from 'react'
import './register.css';

export default function Register() {


    const [user, setUser] = useState({
        username: "", email: "", password: ""
    });


    

        const handleInputs = (e) =>{
            console.log(e)
            let name, value;
            name = e.target.name;
            value = e.target.value;

            setUser({ ...user, [name]:value })
        }


        

  return (
    <>
    <p style={{color:"white"}}>{JSON.stringify(user)}</p>
    <div className='main-div'>
        <div className="register">

            

            <h2>User Registration</h2>
            <form id="register">
                <label><b>Username :</b></label>
                <br />
                <input type="text" name='username' id='uname' value={user.username} onChange={handleInputs} placeholder='Enter Username' />
                <br />
                <label><b>Email :</b></label>
                <br />
                <input type="text" name='email' id='email' value={user.email} onChange={handleInputs} placeholder='Enter Email' />
                <br />
                <label><b>Password :</b></label>
                <br />
                <input type="password" name='password' id='password' value={user.password} onChange={handleInputs} placeholder='Enter Password' />
                <br />

                <button className="submit">Sign up</button>

            </form>
        </div>
      
    </div>
    </>
  )
}
