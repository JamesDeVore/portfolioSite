import React from "react";

import james from "../../assets/james.jpg";
export default function Me() {
  return (
    <div className="container">
      <div className="row flex align-items-center justify-content-center p-4 about-me-row">
        <div className="col-md-12 text-center">
          <h2>A Little About Me</h2>
          <hr />
        </div>
        <div className="col-md-4">
          <img
            className="img-fluid"
            height="250"
            width="250px"
            src={james}
            alt="James"
          />
        </div>
        <div className="col-md-6">
          <div>
            <p>
              I'm an Ecologist turned software developer, endlessly distracted
              by new technologies and coding apps nobody asked for.
            </p>
            <p>
              I take any excuse I can to solder some new gadget or even try out
              some new front end framework, just to see how it works.
            </p>
            <p>
              I'm just beginning on my journey as a software developer, but I
              eagerly take on any challenge, and as long I as I get to learn
              something along the way, I consider any endeavor a success
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
