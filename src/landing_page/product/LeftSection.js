import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  GooglePlay,
  appStore,
}) {
  return <div className="continer mt-5">
    <div className="row ">
      <div className="col-6 " >
        <img src={imageURL} />
      </div>

      <div className="col-6 p-5 mt-5">
        <h1>{productName}</h1>
        <p>{productDesription}</p>
        <div className="">
            <a href={tryDemo}>Trydemo</a>
            <a href={learnMore} style={{marginLeft:"50px"}}>learn more</a>
        </div>

        <div className="mt-3">
            <a href={GooglePlay}><img src="media/images/googlePlayBadge.svg"/></a>
            <a href={appStore}><img src="media/images/appstoreBadge.svg" style={{marginLeft:"50px"}}/></a>
        </div>
        

      </div>
    </div>
  </div>;
}

export default LeftSection;
