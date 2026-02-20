import React, { useState } from 'react'
import './Home.css'
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
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
    
    {/* // onClick={()=>color==="white"? setcolor(document.body.style.backgroundColor="black"):setcolor(document.body.style.backgroundColor="white")}  */}
  <img src="https://img.freepik.com/premium-photo/man-blue-hoodie-happily-showcasing-shopping-bags-against-solid-background_116547-136878.jpg?ga=GA1.1.2073614510.1741160662&semt=ais_hybrid&w=740" className="card-img-top img-fluid d-block mx-auto" alt="..." style={{maxHeight:"400px",objectFit:"cover"}}/>
 
</div>
            </div>


             <div className="col-10 col-md-6 mt-5">
            <div className="card-left h-100 p-5 d-block mx-auto" >
                    <h5 className='fs-1  '>Hello! </h5>
                    <h5  className='fs-1  '>I'm Ravi,Frontend developer</h5>
                     <p  className='fs-4  '> I am a beginner Front-End developer with a strong interest in web design and development</p>
                       
                       <div className="button-profile">

                       <button className='rounded-5 mt-2 fw-bold'> <AnchorLink className='anchor-link' offset={50} href='#contact'> Contact</AnchorLink></button>
                       <button className='rounded-5 mt-2 fw-bold'>Resume</button>

                       </div>


                          </div>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default Home