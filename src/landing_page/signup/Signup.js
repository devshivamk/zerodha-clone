import React from "react";

import Navbar from "../../Navbar";
import Footer from "../../Footer";

function Signup() {
  return (
    <>


      <main>
        <h1>Open a Zerodha account</h1>

        <p>
          Start investing and trading with a simple and powerful platform.
        </p>

        <div>
          <input
            type="text"
            placeholder="Enter your mobile number"
          />

          <button>Continue</button>
        </div>
      </main>


    </>
  );
}

export default Signup;