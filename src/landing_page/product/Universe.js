import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">

        {/* Heading Section */}
        <div className="col-12">
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          <h1>The Zerodha Universe</h1>

          <p>
            Want to know more about our technology stack? Check out the
            Zerodha.tech blog.
          </p>
        </div>


        {/* Zerodha Fund House */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhafundhouse.png"
            alt="Zerodha Fund House"
            style={{
              height: "50px",
              width: "auto"
            }}
          />

          <p className="text-small text-muted mt-3">
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>


        {/* Sensibull */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={{
              height: "35px",
              width: "auto"
            }}
          />

          <p className="text-small text-muted mt-3">
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>


        {/* GoldenPi */}
        <div className="col-4 p-2 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            style={{
              height: "45px",
              width: "auto"
            }}
          />

          <p className="text-small text-muted mt-3">
            Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more.
          </p>
        </div>


        {/* Streak */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            style={{
              height: "55px",
              width: "auto"
            }}
          />

          <p className="text-small text-muted mt-3">
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>


        {/* Smallcase */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            style={{
              height: "50px",
              width: "auto"
            }}
          />

          <p className="text-small text-muted mt-3">
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>


        {/* Ditto */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            style={{
              height: "55px",
              width: "auto"
            }}
          />

          <p className="text-small text-muted mt-3">
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Universe;