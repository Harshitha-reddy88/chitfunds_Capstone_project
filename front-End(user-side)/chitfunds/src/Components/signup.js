import React from 'react';
import './signup.css';
function Signup(){
    return(
        <div>
            <div className='signup'>
                <h1>SignupPage</h1>

                <div className='nameDiv margintop'>
                    <input className="name" type="text" placeholder="enter name"/>
                </div>
                <div className='userNameDiv margintop'>
                    <input className="userName" type="text" placeholder="enter username"/>
                </div>
                
                <div className='passwordDiv margintop'>
                    <input className="password" type="password" placeholder="password"/>
                </div>
                
                <div className='emailDiv margintop'>
                    <input className="email" type="email" placeholder="emain ID"/>
                </div>

                <div className='phoneNumberDiv margintop'>
                    <input className="phoneNumber" type="number" placeholder="phone number"/>
                </div>
                
            </div>
        </div>
    )
}
export default Signup;