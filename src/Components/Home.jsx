import React, { useState } from 'react'
import './Home.css'
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import image from '../assets/image.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Home = () => {

const[color,setcolor]=useState(false)

 const myToggle=()=>{
  if(color){
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
  }else{
     document.body.style.backgroundColor="black"
     document.body.style.color="white"
  }
  setcolor(!color)
 }

  return (
    <>
    <div id='home' className="container home-box">
        <div className="row  d-flex justify-content-center align-items-start">
           
            <div className="col-10 col-md-6">
  <div className="card-right" >

<div onClick={myToggle}>
   {color ? <IoSunnySharp color="yellow"/>: <FaMoon color='black'/> }
   </div>
    
  <img src={image} className="card-img-top img-fluid d-block mx-auto" alt="image of" style={{maxHeight:"400px",objectFit:"cover"}}/>
 
</div>
            </div>


             <div className="col-10 col-md-6 mt-5">
            <div className="card-left h-100 p-5 d-block mx-auto" >
                    <h5 className='fs-2  '>Hello! </h5>
                    <h5  className='fs-2  '>I'm Ravi,MERN Full Stack Developer</h5>
                     <p  className='fs-4  '> I am a beginner MERN Full-Stack Developer with a strong interest in web design and development</p>
                       
                       <div className="button-profile">

                       <button className='rounded-5 mt-2 fw-bold'> <AnchorLink className='anchor-link' offset={50} href='#contact'> Contact</AnchorLink></button>
                       <button className='rounded-5 mt-2 fw-bold'><a href="./ravi resume.txt" download="resume">Resume</a></button>

                       </div>


                          </div>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default Home