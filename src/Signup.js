import React from 'react';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import './Signup.css';
import Form from 'react-bootstrap-form';
import 'bootstrap/dist/css/bootstrap.css';

function Signup() {
    
    return (
        <div className="signup_form">
            <h4 style={{color: "gray"}}>Sign up</h4>
            <br/>
            <br/>
            <h1 style={{color: "gray"}}>Create Your Account</h1>
            <div className="loginButtons">
                <div className="loginButtonsgoogle"><GoogleLoginButton  onClick={() => alert("Hello")} /></div>
                <div className="loginButtonsfacebook"><FacebookLoginButton  onClick={() => alert("Hello")} /></div>
            </div>
            <h3 style={{color: "gray"}}>------------------------- or -------------------------</h3>
            <br/>
            <div>
            <Form>
                <input type="Text" className="form-control" name="username" placeholder="First Name"/>
                <br/>
                <input type="Text" className="form-control" name="username1" placeholder="Last Name"/>
                <br/>
                <input type="Text" className="form-control" name="Email" placeholder="Email Address" />
                <br/>
                <input type="password" className="form-control" name="password" placeholder="Password" />
                <br/>
                <p>By Clicking Sign Up you agree to our <span onClick={() => alert("Hello")} style={{color: "blue"}}>Terms of Use</span> and out <span onClick={() => alert("Hello")} style={{color: "blue"}}>Privacy Policy</span></p>
                
                  <button  className="btn btn-primary form-control" type="submit" onClick={() => alert("submited")}>Sign Up</button>
                
            </Form>
            </div>
        </div>
    )
}

export default Signup;
