import React from "react";
import NotFoundImg from "../Assets/Images/NotFoundImg.jpg"; 

function NotFound() {
    return <>
        <img src={NotFoundImg} alt="404 Not Found" className="not-found-img"/>
    </>
}

export default NotFound;