import React,{useState,useEffect} from 'react'
import logo from './YMlogo.png'
import account from './user.png'
import './Nav.css';
function Nav() {
    const[show,handleShow]=useState(false)
     useEffect(() => {
         window.addEventListener("scroll",()=>{
             if(window.scrollY>100){
                 handleShow(true)
             }else handleShow(false)

         });
         return ()=>{
             window.removeEventListener("scroll")
         }
         
     }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="logo"
            src={logo}
            alt="logo"
            ></img>
        <img className="nav_account"
        src={account}
        alt="account"
        >

        </img>
        </div>
    )
}

export default Nav
