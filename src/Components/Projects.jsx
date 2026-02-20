import React, { useState } from 'react'
import './Projects.css'
import { projectData } from './Dataofprojects'

const Projects = () => {

  const[project,setProject]=useState(projectData)

  return (
    <>
    <div id='projects' className="container mt-5 ">

<div className="project-box">

      <div className=" ">
      <h5>My Projects</h5>
      <p>Welcome to my front-end & graphic designing portfolio</p>
      </div>


<div className="row ">
  

{
 project.map((items,index)=>{
  return(
<div className="col-md-3 g-2 mt-4">
    <div className="card project-card " key={index}>

      0{items.id}
    
      <div className="card-body">
        {items.icons}
        <h5 className="card-title">
          {items.heading}
        </h5>
        <p className="card-text">
         {items.discription}
        </p>
      </div>
    </div>
  </div>
  )
 })
 
 }


  
</div>


</div>
    </div>
    </>
  )
}

export default Projects