import React from 'react'
import MyCarousel from '../components/Slider'


export default function Homepage() {
  return (
   <>
   <MyCarousel/>


   <section id="about" className="about">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <div className="row content">
            <div className="col-lg-7">
              <h2>Algo Trading Strategies to Improve Your Earnings</h2>
              <p>TradeTool is India’s leading provider of algorithmic trading solutions. Our platform is considered one of the best on the market, offering traders a wide variety of features and tools, including scanning. With our professional expertise and commitment to excellence, we are dedicated to helping traders succeed through assistance.</p>
            </div>
            <div className="col-lg-5">
              <h4>Advantages</h4>
              <ul>
                <li><i className="ri-check-double-line"></i>Automated Execution</li>
                <li><i className="ri-check-double-line"></i>Risk Management</li>
                <li><i className="ri-check-double-line"></i>Backtesting And Optimization</li>
                <li><i className="ri-check-double-line"></i>Real-Time Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 video-box align-self-baseline" data-aos="zoom-in" data-aos-delay="200">
        <img src="assets/Images/chart.jpg" className="img-fluid" alt="" width="600" />
        <a href="https://www.youtube.com/@tradetools403" className="play-btn mb-4">p</a>
      </div>
      <div className="col-lg-7 pt-3 pt-lg-0 content">
        <h3>BEST TRADING SOFTWARE PROVIDER IN INDIA</h3>
        <ul className="fst-italic">
          <li><i className="bx bx-check-double"></i>“Zerodha Streak” is a popular algorithmic trading platform in India, offering a user-friendly interface and backtesting capabilities to develop and deploy trading strategies.</li>
          <li><i className="bx bx-check-double"></i>“Upstox Algo Trading” provides a comprehensive suite of tools and APIs for building and executing algorithmic trading strategies in the Indian market.</li>
          <li><i className="bx bx-check-double"></i>“Kite Connect API” by Zerodha allows developers to access real-time market data and execute trades programmatically, enabling the creation of custom algorithmic trading strategies in India.</li>
        </ul>
        <p>TradeTool is a technology company specializing in developing algorithmic software for financial trading. We have a team of developers and merchants who are committed to creating advanced solutions that make the business process more efficient and effective. With over 14 years of experience and a focus on innovation, TradeTols is a trusted business solutions provider.</p>
      </div>
    </div>
  </div>
</section>



        <section id="clients" className="clients section-bg">
          <div className="container">
            <div className="row">
            
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/Images/logo2.webp" className="img-fluid" alt=""/>
              </div>
    
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/Images/logo6.jpg" className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/Images/logo7.png" className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/Images/logo4.png" className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/Images/logo9.jpg" className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/Images/logo10.jpg" className="img-fluid" alt=""/>
              </div>

            </div>
          </div>
        
        </section>



        <section id="serv" className="serv">
          <div className="container">
          <div className="row">

              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon">
                  <i className="fa-solid fa-universal-access"></i>
                  <h4><a href="/">Accessible Free</a></h4>
                  <p>High-speed algo engine connects with global data providers for real-time multi-market trading experience in India.</p>
                </div>
              </div>

              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon">
                  <i className="fa-solid fa-barcode"></i>
                  <h4><a href="/">Enchanting</a></h4>
                  <p>Whether you seek forex divergence, buy and hold, market making, or need guidance, we've got you covered.</p>
                </div>
              </div>

              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon">
                  <i className="fa-solid fa-chart-simple"></i>
                  <h4><a href="/">Social trading</a></h4>
                  <p>New to the market? No worries. Social trading makes participating in top algo trading strategies easy and transparent.</p>
                </div>
              </div>

              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon">
                  <i className="fa-solid fa-inbox"></i>
                  <h4><a href="/">Backtesting Engine</a></h4>
                  <p>Our real-time backtesting engine ensures thorough strategy testing with historical data, providing deep insights for future performance.</p>
                </div>
              </div>
              
            </div>
          </div>
        </section>


   </>
  )
}
