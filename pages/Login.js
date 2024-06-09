import React, { useState } from 'react';


export default function Login() {

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
      e.preventDefault(); 
      // Add logic for form submission, e.g., sending data to backend
      console.log(user);
    }
  


  return (
    <>
    <section id="register" className="register" style={{backgroundImage: "url(assets/Images/bg1.jpg)"}}>
  <div className="container"> 
    <div className="row justify-content-center" >
      <div className="col-lg-6">
              <div id='signup2'>
                <p className="text-center fw-bold mb-5 mx-1 mx-md-4 mt-4" id="signup">Log In</p>
                <form className="mx-1 mx-md-4"  id='contact_page' onSubmit={handleSubmit}>
  
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

                  
                   <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                     <button type="submit"  className="btn btn-danger btn-lg" id="register">Log In</button>
                   </div>


                   <p className="d-flex justify-content-center mx-4 mb-3 mb-lg-4"><a className="text-muted" href="reset_pass.php">Forgot Password ?</a></p>
                   <p className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">Don't have an account?  <a href="/Register" className="link-danger"> Register here</a></p>
                 

  
                </form>
  
              </div>
         
      </div>
    </div>
  </div>
  </section>

    
    
    </>
  )
}
