import React, { useEffect } from 'react'
import Typical from 'react-typical';
import {Button,Media}  from 'reactstrap';
import img from '../img/new-1.png';
import Fade from 'react-reveal/Fade';
import '../App.css';

export default function Header() {
    
  
    return (
        
        <div className="background  d-lg-block" id="header">
            <div className="bhas"></div>
        <div className="container  pt-lg-5 pb-lg-5" style={{fontSize:'35px'}}>
           <div className="row">
        <Fade left><div className="col-lg m-auto justify-content-between">
            <h1 className="" style={{fontSize:'45px'}}>HELLO, I AM SHIVA TEJA</h1>
            <span style={{fontSize:'25px',fontWeight:'bold',display:'flex'}}>
           <div style={{paddingRight:'5px',paddingLeft:'2px'}}></div>{' '}
           <div style={{color:'#F76164'}}> <Typical style={{fontSize:'70px',color:'red'}}
        steps={[' Student', 2000, ' Web Developer!', 4000,' Geek', 1200,]}
        loop={Infinity}
        wrapper="p"
        /></div>
        </span>
        <br />

        </div></Fade>
       
       <Fade right> <div className="col-lg justify-content-xs-center">
        <Media src={img} className="col " style={{height:'auto',widht:'auto',}}></Media>
        </div></Fade>
        </div>
        </div>
        </div>
    )
}

