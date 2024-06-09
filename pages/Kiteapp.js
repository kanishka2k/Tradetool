import React from 'react'


export default function Kiteapp() {
  return (
    <>


    <section id="product" className="product">
    <div className="container1">
        <div className="rows">

          <div className="col-lg-6">
            <img src="assets/Images/product4.jpg" alt="" width="590px" height="460px" style={{ borderRadius: '10px' }}/>
         </div>
          <div className="col-lg-6">
            <h2><u>Kite-App</u></h2>
            <p>"Our hassle-free solution empowers traders of all levels to access features and functionalities, making trading more accessible and cost-effective.”</p>
            <h3><del>₹2100</del> ₹0</h3>
            <h3>Extra Setup Assistance +₹10.00</h3>

            <div className="d-flex justify-content-center">
              <button type="button"  className="button" id=""> <a href="/"><i className="fa-solid fa-cart-arrow-down"></i> Add to Cart</a></button>
            
              <button type="button"  className="button" id=""> <a href="/"><i className="fa-solid fa-shield-heart"></i> Add to Wishlist</a></button>

              <button type="button"  className="button" id=""> <a href="/Products"><i className="fa-solid fa-layer-group"></i>CATEGORY: Uncategorized</a></button>
            </div>
        </div>
        </div>
    </div>
  </section>


  <section id="product" className="product">
    <div className="container1">
        <div className="rows">
  <div className="col-lg-12">
  <h2><u>DESCRIPTION</u></h2>
    <p>Seamlessly Connect with Zerodha for Free using our Python Integration
        “Unlock the power of Zerodha trading without breaking the bank! Introducing our Python integration file that allows you to connect with Zerodha’s trading platform, all without the need to purchase the official API. Our hassle-free solution empowers traders of all levels to access Zerodha’s features and functionalities, making trading more accessible and cost-effective.”</p>
        <h3>Key Features:</h3>
        <ul className="a">
        <li><i className="fa-solid fa-check-double"></i><b>No API Costs:</b> Our Python integration file provides a free alternative for connecting with Zerodha. It save costs and allocate your resources more efficiently.</li>
        <li><i className="fa-solid fa-check-double"></i><b>Secure Connection:</b> We prioritize the privacy and security of  trading activities, ensuring your data remains protected.</li>
        <li><i className="fa-solid fa-check-double"></i><b>Order Placement:</b> Place market orders, limit orders, stop-loss orders, and more, all through a user-friendly interface that simplifies the trading process.</li>
        <li><i className="fa-solid fa-check-double"></i><b>Real-time Market Data:</b> Stay up-to-date with the latest stock prices, order book information, and trade feeds. We provide accurate trading decisions.</li>
    </ul>
    </div>
    </div>       
</div>
</section>

    
    </>
  )
}
