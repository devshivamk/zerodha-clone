import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul>
            Call & Trade and RMS auto-squareoff:Additional charges of ₹50 + GST
            per order. 
            Digital contract notes will be sent via e-mail. 
            Physical
            copies of contract notes, if required, shall be charged ₹20 per
            contract note-6courier charges apply. 
            For NRI account (non-PIS),
            0.5% or ₹100 per executed order for equity (whichever is lower). For
            NRI account (PIS), 0.5% or ₹200 per executed order for equity
            (whichever is lower). 
            IIf the account is in debit balance, any order
            placed will be charged ₹40 per executed order instead of ₹20 per
            executed order.
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5"> List of chargres</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
