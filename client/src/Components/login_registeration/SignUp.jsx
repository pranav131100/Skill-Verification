import React,{useState} from 'react'
import { Form, Row, Col, Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios';
import './SignIn.css'
import {ethers} from 'ethers'



const SignUp = (props) => {
  const[addr, setAddr] = useState('0x');
  const handleClick = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum || '127.0.0.1:7545')
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()
    signer.getAddress()
    .then(e => setAddr(e))
    .catch(alert("Error while connecting to Metamask!!!"));
  }
   

    return (
        <>
             <div className="form-wrapper">
        <h1>Sign Up</h1>
        <form>
          <div className="form-item">
            <label htmlFor="name" />
            <input type="text" name="name" required="required" placeholder="Name" />
          </div>
          <div className="form-item">
            <label htmlFor="location" />
            <input type="text" name="location" required="required" placeholder="Location" />
          </div>
          <div className="form-item">
            <label htmlFor="description" />
            <input type="text" name="description" required="required" placeholder="Description" />
          </div>
          <div className="form-item">
          <label htmlFor="role" />
          <select class="form-select" id = "role" aria-label="Default select example">
  <option selected>Select Role</option>
  <option value="organization">Organization</option>
          <option value="individual">Individual</option>
</select>
          
          </div>
          <div className="button-panel" >
          <button className = "button" onClick={handleClick}>  <img src="client\src\metamask-fox.svg" alt="" /> Connect Metamask wallet</button>
            <br />
            <br />
            <input type="submit"   className="sub_button" title="Register" defaultValue="Register" />
          </div>
        </form>
        {/* <div className="form-footer">
          <p><a href="#">Already have an account</a></p>
          <p><a href="#">Forgot password?</a></p>
        </div> */}
      </div>
        </>
    )
}



export default SignUp;
