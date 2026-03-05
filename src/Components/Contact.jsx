import React from 'react'
import './Contact.css'
import { toast } from 'react-toastify';

const Contact = () => {


  // const myHandle = (e) => {
  //   e.preventDefault()
  //   toast.success("All is fine")

  // }
  // 
  const onSubmit = async (event) => {
    event.preventDefault();
    toast.success("Form Submitted Successfully")

    const formData = new FormData(event.target);

    formData.append("access_key", "66c91935-96f5-4651-9253-87e71a059eaf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();

    } else {
      console.log("Error", data);
    }
  };

  return (

    <>
      <div id='contact' className="container mt-5">

        <h5 className='contact-box'>Contact Me</h5>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              required


            ></textarea>
          </div>

          <button className='contact-submit' type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact