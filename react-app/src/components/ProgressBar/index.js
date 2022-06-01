import React, { useState } from "react";
import "./index.css";
<<<<<<< HEAD
import SingleProjectPreview from "../SingleProjectPreview";
=======
>>>>>>> ba84b39927b5c7db895e08359390680524a04d9a

const ProgressBar = ({ percent }) => {
    return (
        <>
<<<<<<< HEAD
            <h1>Progress bar</h1>
=======
            <h2>{`${percent}%`}</h2>
>>>>>>> ba84b39927b5c7db895e08359390680524a04d9a
            <div className="outer">
                <div style={{ width: `${percent}%` }} className="inner">

                </div>
            </div>
        </>
<<<<<<< HEAD
=======

>>>>>>> ba84b39927b5c7db895e08359390680524a04d9a
    );
}

export default ProgressBar;
