import React, { useState } from "react";
import "./index.css";
import SingleProjectPreview from "../SingleProjectPreview";

const ProgressBar = ({ percent }) => {
    return (
        <>
            <h1>Progress bar</h1>
            <div className="outer">
                <div style={{ width: `${percent}%` }} className="inner">

                </div>
            </div>
        </>
    );
}

export default ProgressBar;
