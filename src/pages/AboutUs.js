import React from 'react'


export default function AboutUs() {
  return (
  <>
  

  <section id="about1" className="about1">
    <div className="container1">
        <div className="rows">

          <div className="col-lg-4">
            <img src="assets/Images/ab1.jpg" alt="" width="430px" height="580px"/>
         </div>
          <div className="col-lg-8">
  
            <h2><i className="fa-regular fa-handshake"></i> Customize Your Trading Journey Here </h2>
            
            <p>We understand that no two traders are alike, and a personalized approach is essential for success. At TradeTool, we offer custom strategies tailored to your unique requirements. Our team of experts will work closely with you to understand your trading goals, risk tolerance, and preferred trading style. Using advanced algorithms and our industry knowledge, we will develop a customized trading strategy that maximizes your potential for profit. With a personalized approach, you can navigate the markets with precision andachieve your financial objectives.
                The TradeTool Marketplace gives you access to the best algorithmic trading strategies and is used as a tool to identify and determine the best automated trading strategy.</p>
                <h3>Latest top three strategies are:</h3>
              <ul>
                <li><b>Accessible Free</b></li>
                <p>This strategy capitalizes on strong price movements, identifying breakouts and entering positions to ride the momentum for potential profits.</p>
                <li><b>Mean Reversion</b></li>
                <p>This strategy seeks to profit from price fluctuations by identifying overextended or oversold conditions and anticipating a return to the mean value.</p>
                <li><b>Pairs Trading</b></li>
                <p>This strategy involves identifying correlated instruments and taking advantage of temporary divergences in their prices, aiming to profit from the reversion to their historical relationship.</p>
              

              </ul>
          </div>
        
           
        </div>
    </div>
</section>


  <section id="serv" className="serv">
    <div className="container">
     <div className="row">

        <div className="col-md-6">
          <div className="icon">
            <i className="fa-solid fa-gear"></i>
            <h4><a href="/">Orders Management Tools</a></h4>
            <p>Help to manage all your orders from one place. and palce order with unlimited quantity no need to iceberg orders</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="icon">
            <i className="fa-solid fa-barcode"></i>
              <h4><a href="/">Fully Automated Algos</a></h4>
            <p>Convert your trading rule to algo and enjoy hassle free trading</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="icon">
            <i className="fa-brands fa-codepen"></i>
            <h4><a href="/">Live Option Chain</a></h4>
            <p>You get access to live option chain Data in Excel with python</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="icon">
            <i className="fa-solid fa-gears"></i>
            <h4><a href="/">Scalping Tools </a></h4>
            <p>It will helps to place and exits order Quickly without Slippages</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="icon">
            <i className="fa-solid fa-signal"></i>
            <h4><a href="/">Strategies</a></h4>
            <p>Same strategy runs with multiple instruments like NIFTY, BANKNIFTY and multiple brokers like Zerodha, AngleOne etc.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="icon">
            <i className="fa-regular fa-eye"></i>
            <h4><a href="/">Live Indicators</a></h4>
            <p>Place order based on signals of Multiple Indicators in multiple time frame from one place, no need to watch chart</p>
          </div>
        </div>

        </div>
      </div>
  </section>

  
  </>
  )
}
