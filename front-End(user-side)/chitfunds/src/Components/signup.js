import React from 'react';
import './signup.css';
import { useState } from 'react';
function Signup() {
    const [first, setFirst] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    function buttonClick() {
        if (first !== "" && user !== "" && password !== "" && phone !== "" && email !== "") {

            let signupdetails = JSON.parse(localStorage.getItem("signup")) || [];
            for(let i=0;i<signupdetails.length;i++){

                if(signupdetails[i].user==user && signupdetails[i].password==password){
                    alert("alredy have an account please login")
                }
            }
            localStorage.setItem("signup", JSON.stringify([...signupdetails, { first, user, password, phone, email }]));
        }
        else {
            alert("enter your details")
        }
    }
    return (
        <div className="maindiv">
            <div className="container">
                {/* <div className="logo">
                    <img className="image" src="" />
                </div> */}

                <h2 className="heading">Full Name :</h2>
                <input type="text" className="inputtag first" onChange={e => setFirst(e.target.value)} placeholder="first name" />

                <h2 className="heading1">User Name :</h2>
                <input type="text" className="inputtag user" onChange={e => setUser(e.target.value)} placeholder="last name" />

                <h2 className="heading2">Password :</h2>
                <input type="password" className="inputtag password" onChange={e => setPassword(e.target.value)} placeholder="password" />

                <h2 className="heading3">Phone Number :</h2>
                <input type="number" className="inputtag phone" onChange={e => setPhone(e.target.value)} placeholder="phone number" />

                <h2 className="heading4">email</h2>
                <input type="email" className="inputtag email" onChange={e => setEmail(e.target.value)} placeholder="email" />
                <div>
                    <button className="button" onClick={buttonClick}>Signup</button>
                </div>
                <h4>already have an account ? login</h4>

            </div>
        </div>
    )
}
export default Signup