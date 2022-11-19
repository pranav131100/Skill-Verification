import React,{useState} from 'react'
import { Form, Row, Col, Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios';
import './SignIn.css'


const SignIn = (props) => {

    return (
        <>
             <div className="form-wrapper">
        <h1>Sign In</h1>
        <form>
          <div className="form-item">
            <label htmlFor="email" />
            <input type="email" name="email" required="required" placeholder="Email Address" />
          </div>
          <div className="form-item">
            <label htmlFor="password" />
            <input type="password" name="password" required="required" placeholder="Password" />
          </div>
          <div className="button-panel">
            <input type="submit" className="button" title="Sign In" defaultValue="Sign In" />
          </div>
        </form>
        <div className="form-footer">
          <p><a href="#">Create an account</a></p>
          <p><a href="#">Forgot password?</a></p>
        </div>
      </div>
        </>
    )
}



export default SignIn;
