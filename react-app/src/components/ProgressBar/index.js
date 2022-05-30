import React, { useState } from "react";
import "./index.css";
import SingleProjectPreview from "../SingleProjectPreview";

const ProgressBar = () => {
    const [percentage, setPercentage] = useState(0);

    const progressTracker = () => {

    }

    return (
        <>
            <h1>Progress bar</h1>
            <div className="outer">

                <div className="inner">

                </div>

            </div>
        </>
    );
}

export default ProgressBar;
