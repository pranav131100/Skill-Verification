import React from 'react'
import { Route, Switch, Routes} from "react-router"
import SignUp from './Components/login_registeration/SignUp';
import Navbar from './Components/Navbar';

const App = ()=>{
  return(
    <>
        <Navbar></Navbar>   
       <Routes>
        <Route exact path = "/" element= {<SignUp></SignUp>} ></Route>
        
        </Routes>
    </>
  )
}

export default App;
