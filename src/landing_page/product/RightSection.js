import React from "react";

function RightSection({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center">

        {/* Left Content */}
        <div className="col-md-6 px-5">
          <h1 className="mb-4">{productName}</h1>

          <p
            className="text-muted"
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
            }}
          >
            {productDesription}
          </p>

          {learnMore && (
            <div className="mt-4">
              <a
                href={learnMore}
                style={{
                  textDecoration: "none",
                  color: "#387ed1",
                }}
              >
                Learn more →
              </a>
            </div>
          )}
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{
              maxWidth: "90%",
              height: "auto",
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;