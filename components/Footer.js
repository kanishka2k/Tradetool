import React from 'react'
import BackToTopButton from './BackToTopButton';

export default function Footer() {
  return (
   <>
   
   
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <div className="hfe-site-logo-container">
                <img src="assets/Images/tt.PNG" alt="" width="300px" height="70px"/>
             </div><br/>
               <p>
                Experience algorithmic trading at its finest with our meticulously crafted strategies and innovative methodologies.
              </p>
              <div className="social-links mt-3">
                <a href="https://www.youtube.com/@tradetools403" className="youtube"><i className="bx bxl-youtube"></i></a>
                <a href="https://twitter.com/PRAKASH65888336?t=mphPaZActucojmAkN5HHZA&s=08"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://api.whatsapp.com/qr/7GAYCXP4ANJJN1?autoload=1&app_absent=0"><i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4 >Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="/Homepage">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/AboutUs">About Us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/Products">Products</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/Register">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Opening Hours</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Mon – Sat 9:00 – 17:30 </a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Sunday – CLOSED </a></li>
              
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <p>
              Rajsamand, <br/>
                Rajasthan 313334, India<br/><br/>
                <strong>Phone:</strong> +91 8764468879<br/>
                <strong>Email:</strong> developerpy247@gmail.com<br/></p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>

          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>TradeTool</span></strong>. All Rights Reserved
      </div>
    </div>
    <BackToTopButton />
  </footer>
  

   </>
  )
}


 