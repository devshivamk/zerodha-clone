import React from "react";

function RightSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  GooglePlay,
  appStore,}
) {
  return (
    <div className="continer mt-5">
      <div className="row ">
        
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div className="">
            <a href={learnMore} style={{ marginLeft: "50px",textDecoration: "none"  }}>
              learn more
            </a>
          </div>
        </div>
        <div className="col-6 ">
          <img src={imageURL} />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
