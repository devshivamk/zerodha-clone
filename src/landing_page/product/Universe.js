import React from "react";

function Universe() {
  return (
    <div className="continer mt-5">
      <div className="row text-center">
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <h1>The Zerodha Universe</h1>
        <p>
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
        <div className="col-4 p-3">
          <img src="media/images/zerodhafundhouse.png" />
          <p>
            Our asset management venture <br/> that is creating simple and transparent
            index <br/>funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/sensibull-logo.png" />
          <p>
            Options trading platform that lets you<br/> create strategies, analyze
            positions, and examine <br/>data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/tijori.png" />
          <p>
            Investment research platform<br/> that offers detailed insights on
            stocks, <br/>sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streak-logo.png" />
        </div>
        <p>
          Systematic trading platform <br/>that allows you to create and backtest<br/>
          strategies without coding.
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcase-logo.png" />
          <p>
            Thematic investing platform <br/>that helps you invest in diversified<br/>
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/ditto-logo.png" />
          <p>
            Personalized advice on life<br/> and health insurance. No spam<br/> and no
            mis-selling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
