import React, { useState } from 'react';

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password1: "", 
    password2:"",
  });

  const [showPassword, setShowPassword] = useState(false); 

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Add logic for form submission, e.g., sending data to backend
    console.log(user);
  }

  return (
    <>
      <section id="register" className="register" style={{ backgroundImage: "url(assets/Images/bg1.jpg)" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div id='signup2'>
                <p className="text-center fw-bold mb-5 mx-1 mx-md-4 mt-4" id="signup">Sign Up</p>
                <form className="mx-1 mx-md-4" id='contact_page' onSubmit={handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="name" className="form-control" autoComplete='off'
                        value={user.name} onChange={handleInputs} name="name" />
                      <label htmlFor="name" className="form-label">Full Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="email" className="form-control" autoComplete='off'
                        value={user.email} onChange={handleInputs} name="email" />
                      <label htmlFor="email" className="form-label">Email Address</label>
                    </div>
                  </div>
                  
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i> {/* Changed icon to lock */}
                    <div className="form-outline flex-fill mb-0">
                      <input type={showPassword ? 'text' : 'password'} id="password1" className="form-control" autoComplete='off'
                        value={user.password1} onChange={handleInputs} name="password1" />
                      <label htmlFor="password1" className="form-label">Password</label>
                      <button type="button" className="btn btn-link" onClick={togglePasswordVisibility}>
                      <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i> {/* Changed icon to lock */}
                    <div className="form-outline flex-fill mb-0">
                      <input type={showPassword ? 'text' : 'password'} id="password2" className="form-control" autoComplete='off'
                        value={user.password2} onChange={handleInputs} name="password2" />
                      <label htmlFor="password2" className="form-label">Confirm Password</label>
                      <button type="button" className="btn btn-link" onClick={togglePasswordVisibility}>
                      <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="checkbox" />
                    <label className="form-check-label d-flex justify-content-center mx-4 mb-3 mb-lg-4" for="form2Example3">
                      I agree all statements in <a href="/">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-danger btn-lg" id="register">Register</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
