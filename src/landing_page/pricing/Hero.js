import React from "react";

function Hero() {
  return (
<div className="container">

      <div className="row p-5 mt-5 border-buttom text-center">
        <h1 className=" "> Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equality inventment and flat $20 trady and F&0 trades</h3>
      </div>
        <div className="row p-5 mt-5 text-center">
          <div className="col-4 p-5">
            <img src ="media/images/pricingEquity.svg"/>
            <h1 className="fs-3">Free equity delivary</h1>
            <P className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</P>
          </div>
          <div className="col-4 p-5">
            <img src ="media/images/intradayTrades"/>
            <h1 className="fs-3">Intraday and F&O trades</h1>
            <P className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades</P>
          </div>
          <div className="col-4 p-5">
            <img src ="media/images/pricingEquity.svg"/>
            <h1 className="fs-3">Free direct MF</h1>
            <P className="text-muted" >All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</P>
          </div>
        </div>
      </div>
      
    
  );
}

export default Hero;