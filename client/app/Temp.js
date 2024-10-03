'use client'

import { useState } from "react"

const Temp = () => {
    const [isLogin,setIsLogin]=useState(true)
    // console.log(is)

  return (
    <div className='container'>
        <div className='form-container'>
            <div className='form-toggle'>
                <button className={isLogin ? 'active' :''} onClick={()=>setIsLogin(true)}>Login</button>
                <button className={!isLogin ? 'active':''} onClick={()=>setIsLogin(false)}>SignUp</button>
            </div>
            {isLogin ?<>
            <div className="form">
                <h2>Login form</h2>
                <input type="text" placeholder="Eret" />
                <input type="password" placeholder="Eret" />
                <a href="#">Forgot Password</a>
                <button>Login</button>
                <p>Not a Member ? <a href="">SignUp</a></p>
            </div>
            
            </>:<>
            <div className="form">
                <h2>SignUp form</h2>
                <input type="text" placeholder="Eret" />
                <input type="password" placeholder="Eret" />
                <input type="password" placeholder="Eretii" />
                <button>SignUp</button>
            </div>
            </>

            }

        </div>
        
    </div>
  )
}

export default Temp