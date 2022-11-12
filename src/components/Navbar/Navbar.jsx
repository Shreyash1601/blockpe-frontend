import React from 'react';
import './Navbar.css'
import logo from './Mi.png'
const Navbar=()=>{
  return(
    <>
    <div class="navdec">
    
   <h3 onClick={()=>window.location.href="/About"}>Block Pe</h3>
   
</div>
    </>
  )
}

export default Navbar