import React, { useState } from 'react'
import './About.css'
import { aboutData } from './Dataofabout'

const About = () => {

    const [about] = useState(aboutData)

    return (
        <>
            <div id='about' className="container" >
                <div className="about-box">
                    <div className="about-text">
                        <h6>Introduction</h6>
                        <h3>About me</h3>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-10 ">
                            <p className='about-paragraph mt-3'>
                                I am a passionate fresher with a strong foundation in MERN Full-Stack Development.
                                Skilled in HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, MongoDB, Express, and RESTful APIs.
                                I enjoy creating clean, responsive websites and visually appealing designs.
                                I am a quick learner and always eager to grow and improve my skills.
                                I look forward to starting my career and contributing to a dynamic development team.
                            </p>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 g-4 col-md-10 mx-auto mt-2">
                        {
                            about.map((item, index) => {
                                return (

                                    <div className="col" key={index}>
                                        <div className="card about-card">
                                            <img src={item.icons} className="card-img-top about-icons" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.heading}</h5>
                                                <p className="card-text">
                                                    {item.discription}
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

export default About