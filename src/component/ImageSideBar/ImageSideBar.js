import React from "react";
import "./ImageSideBar.module.css";
import image from "./image.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default function ImageSideBar() {
  return (
    <div className="">
      <div className="image">
        <img className="w-100 min-vh-100" src={image} alt="" />
      </div>
    </div>
  );
}
