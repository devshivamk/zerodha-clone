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
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center">

        {/* Left Image */}
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

        {/* Right Content */}
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

          {/* Links */}
          <div className="mt-4">
            {tryDemo && (
              <a
                href={tryDemo}
                className="me-4"
                style={{
                  textDecoration: "none",
                  color: "#387ed1",
                }}
              >
                Try demo →
              </a>
            )}

            {learnMore && (
              <a
                href={learnMore}
                style={{
                  textDecoration: "none",
                  color: "#387ed1",
                }}
              >
                Learn more →
              </a>
            )}
          </div>

          {/* App Store Buttons */}
          {(GooglePlay || appStore) && (
            <div className="mt-4 d-flex align-items-center gap-3">
              {GooglePlay && (
                <a href={GooglePlay}>
                  <img
                    src="/media/images/googlePlayBadge.svg"
                    alt="Google Play"
                    style={{
                      width: "145px",
                    }}
                  />
                </a>
              )}

              {appStore && (
                <a href={appStore}>
                  <img
                    src="/media/images/appstoreBadge.svg"
                    alt="App Store"
                    style={{
                      width: "145px",
                    }}
                  />
                </a>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default LeftSection;