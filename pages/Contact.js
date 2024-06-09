import React, { useState } from 'react';


export default function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "", 
    message:"",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Add logic for form submission, e.g., sending data to backend
    console.log(user);
  }

  const handleTextareaChange = (e) => {
    const { name, value } = e.target;
    const maxWords = 50; // Change this to your desired word limit
    const words = value.split(/\s+/).filter(Boolean); // Split the value by spaces and remove empty strings
    if (words.length <= maxWords) {
      setUser({ ...user, [name]: value });
    }
  }


  return (
  <>

   <section id="contact" className="contact">
<div className="container">
<div className="row mt-5">

    <div className="col-lg-4">
      <div className="info">
        <div className="address">
          <i className="bi bi-geo-alt"></i>
          <h4>Location:</h4>
          <p>Rajsamand Rajasthan 313334</p>
        </div>

        <div className="email">
          <i className="bi bi-envelope"></i>
          <h4>Email:</h4>
          <p>developerpy247@gmail.com</p>
        </div>
      </div>
    </div>

    <div className="col-lg-8 mt-5 mt-lg-0">
      <form id="php-email-form" onSubmit={handleSubmit}>

        <div className="row">
          <div className="col-md-6 form-group">
            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" autoComplete='off' value={user.name} onChange={handleInputs}/>
          </div>

          <div className="col-md-6 form-group mt-3 mt-md-0">
            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" autoComplete='off' value={user.email} onChange={handleInputs}/>
          </div>
        </div>


        <div className="form-group mt-3">
          <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required=""
          autoComplete='off' value={user.subject} onChange={handleInputs}/>
        </div>
        <div className="form-group mt-3">
          <textarea className="form-control" name="message" id="message" rows="5" placeholder="Message" required="" autoComplete='off' value={user.message} onChange={handleTextareaChange}></textarea>

          <small>{50 - user.message.trim().split(/\s+/).filter(Boolean).length} words maximum</small>

        </div>
        <br/>
      

          <div><button type="submit" className="btn btn-danger btn-sm" id="submit">Send Message</button></div>
        </form>

      </div>

    </div>

  </div>
</section>

  
  </>
  )
}
