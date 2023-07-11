import React from 'react';
import './forgotpassword.css';
import { useState } from 'react';
function Forgotpassword(){
    const [forgotpageUser, setUsername] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    function updateClick(){
        if(forgotpageUser=="" ||newpassword==""|| confirmpassword==""){
            alert("enter details")
        }
        else{
        let forgotpage=JSON.parse(localStorage.getItem("signup")) || [];
        let item=false;
        if(newpassword==confirmpassword){
            let arr=[];
            for(let i=0;i<forgotpage.length;i++){
                if(forgotpage[i].user===forgotpageUser){
                    item=true;
                    if(forgotpage[i].user!==forgotpageUser){
                        let obj={
                            ...forgotpageUser[i],
                            password:newpassword
                        }
                        arr.push(obj)
                    }
                    else{
                        alert("new password and old passwords are same");
                        return;
                    }
                }
                else{
                    arr.push(forgotpage[i]);
                }
            }
            alert("password is updated");
            localStorage.setItem("signup",JSON.stringify(arr));
        }
        else{
           alert("passwords are not same");
           return;
        }
        if(!item)
          alert("User does not exist");
      }
    }
    return (
        <div className="maindiv">
            <div className="container">
                <div className="logo">
                    <img className="image" src="beauty.jpg" />
                </div>
                <h2 className="username">User Name :</h2>
                <input type="text" className="inputtag forgotpageUser" onChange={e => setUsername(e.target.value)} placeholder="last name" />

                <h2 className="password">new password :</h2>
                <input type="password" className="inputtag newpassword"  onChange={e => setNewpassword(e.target.value)}placeholder="password" />

                <h2 className="ConformPassword">confirm password :</h2>
                <input type="password" className="inputtag confirmpassword" onChange={e => setConfirmpassword(e.target.value)} placeholder="password" />

                <div>
                    <button className="button" onClick={updateClick}>Update</button>
                </div>
            </div>
        </div>
    )
}
export default Forgotpassword
    

