import React, { Suspense, useEffect, useState } from "react";
import { aboutPic } from "../../assets";

const ProfileCanvas = () => {
  return(
    <div className="aboutPic">
      <img src={aboutPic} />
    </div>
  )
}

export default ProfileCanvas;
