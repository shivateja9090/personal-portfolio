import React,{useState} from 'react'
import {
 Media,  Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import Fade from 'react-reveal/Zoom';
import Zoom from 'react-reveal/Fade';

import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 

export default function Projects() {
    
       

    return (
        
        <div id="contact">
        <h1 className="mb-4"  style={{paddingBottom:'1px',width:'fit-content',fontSize:"25px",color:' #6300ff',margin:'auto'}}>Contact Me <div style={{width:'60%',height:'3px',background:'#40739e',opacity:'1',margin:'auto'}} className="mt-1"></div></h1>

        <div className="container"> 
         <div className="row  justify-content-around" style={{marginBottom:'35px'}}>
         
         
          <Card className="bg-white col-lg-5 justify-content-around col-11 shadow-lg text-center card" style={{color:'black',marginBottom:'35px',height:'310px',width:"330px",borderBottom:'5px solid #2980b9'}}>
            
            <CardBody className="d-flex flex-column">
              <div className="">
              <CardTitle tag="h5" className="m-auto pt-2">Address</CardTitle>
              </div>
              <div className=" m-auto">
            <FontAwesomeIcon icon="home" style={{height:'40px',width:'40px'}} />
           <CardText tag="h6" style={{lineHeight:'1.5em',letterSpacing:'0.2em',marginTop:'10px'}}>1-7-506/3 zamistanpur,hyderabad<br/> Telangana 500020</CardText>
            </div>
            </CardBody>
          </Card>
          
          <Card className="bg-white col-lg-5 justify-content-around col-11 shadow text-center card" style={{color:'black',marginBottom:'35px',height:'310px',width:"330px",borderBottom:'5px solid #2980b9'}}>
            
          <CardBody className="d-flex flex-column">
              <div className="">
              <CardTitle tag="h5" className="m-auto pt-2">Contact No</CardTitle>
              </div>
              <div className=" m-auto">
            <FontAwesomeIcon icon="phone" style={{height:'40px',width:'40px'}} />
           <CardText tag="h6" style={{lineHeight:'1.5em',letterSpacing:'0.2em',marginTop:'10px',fontSize:'20px'}}>7675069090</CardText>
            </div>
            </CardBody>
          </Card>

         
         
        </div>


        <div className="row justify-content-around" style={{marginBottom:'35px'}}>
         
         
        <Card className="bg-white col-lg-5 justify-content-around col-11 shadow text-center card" style={{color:'black',marginBottom:'35px',height:'310px',width:"330px",borderBottom:'5px solid #2980b9'}}>
            
        <CardBody className="d-flex flex-column">
              <div className="">
              <CardTitle tag="h5" className="m-auto pt-2">Email</CardTitle>
              </div>
              <div className=" m-auto">
            <FontAwesomeIcon icon="envelope" style={{height:'40px',width:'40px'}} />
           <CardText tag="h6" style={{lineHeight:'1.5em',letterSpacing:'0.2em',marginTop:'10px'}}><h5>Gmail</h5> <br/>gshivateja2001@gmail.com</CardText>
            </div>
            </CardBody>
          </Card>
          
          <Card className="bg-white col-lg-5 justify-content-around col-11 shadow text-center card" style={{ color:'black',marginBottom:'35px',height:'310px',width:"330px",borderBottom:'5px solid #2980b9'}}>
            
          <CardBody className="d-flex flex-column">
              <div className="">
              <CardTitle tag="h5" className="m-auto pt-2">Social</CardTitle>
              </div>
              <div className=" m-auto d-flex flex-column justify-content-center">
           <div className="mb-2">
           <span className="d-flex justify-content-start"><FontAwesomeIcon icon={['fab','github']} style={{height:'40px',width:'40px',color:'black'}} />  <h5 className="align-self-center px-3"><a href="https://github.com/shivateja9090">Shiva Teja</a></h5></span>
           <CardText tag="h6" style={{lineHeight:'1.5em',letterSpacing:'0.2em',marginTop:'10px',color:'black'}}></CardText>
            </div>

            <div className="mb-2 ">
           <span className="d-flex justify-content-start"><FontAwesomeIcon icon={['fab','linkedin']} style={{height:'40px',width:'40px',margin:'auto'}} />  <h5 className="align-self-center px-3"><a href="https://www.linkedin.com/in/shiva-teja-258949169/">Shiva Teja</a></h5></span>
           <CardText tag="h6" style={{lineHeight:'1.5em',letterSpacing:'0.2em',marginTop:'10px'}}></CardText>
            </div>

            <div className="mb-2">
           <span className="d-flex "><FontAwesomeIcon icon={['fab','facebook']} style={{height:'40px',width:'40px',margin:'auto'}} />  <h5 className="align-self-center px-3"><a href="https://www.facebook.com/shiva.teja.378199/">Shiva Teja</a></h5></span>
           <CardText tag="h6" style={{lineHeight:'1.5em',letterSpacing:'0.2em',marginTop:'10px'}}></CardText>
            </div>
           
           
           
            </div>
            </CardBody>

          </Card>

         
         
        </div>
        </div>             
        </div>
           
       
      
       
    )
}
