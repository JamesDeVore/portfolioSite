import React, { useState } from "react";
import ImgCarousel from "./ImgCarousel";

export default function ProjectItem({
  project: { images, name, summary, detailedDesc },
}) {
  return (
    <div className="row col-md-12 justify-content-center project-item">
      <div className="col-md-12">
        <h1 className="text-center font-weight-bold">{name}</h1>
      </div>
      <div className="p-2">
        <div className="offset-1 col-md-10">
          <ImgCarousel images={images} />
        </div>

        <div className=" text-center offset-md-3 col-md-6">
          <p className="font-weight-light card-text">{summary}</p>
        </div>
      </div>
      <div className="col-md-10">
        <p style={{ textIndent: "5em" }}>{detailedDesc}</p>
      </div>
    </div>
  );
}
