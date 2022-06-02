
import React, { useState } from "react";
import "./index.css";

const ProgressBar = ({ percent }) => {
    return (
        <>
            <h2>{`${percent}%`}</h2>
            <div className="outer">
                <div style={{ width: `${percent}%` }} className="inner">

                </div>
            </div>
        </>

    );
}

export default ProgressBar;
