import React, { useState } from "react";
import "./index.css";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import SingleProjectPreview from "../SingleProjectPreview";
>>>>>>> a12bf0d... update changes from staging branch on src/App.js, components: ProgressBar, ProjectPreview, ProjectTasksInProgress, SingleProjectPreview and store:project

const ProgressBar = ({ percent }) => {
    return (
        <>
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <h1>Progress bar</h1>
>>>>>>> a12bf0d... update changes from staging branch on src/App.js, components: ProgressBar, ProjectPreview, ProjectTasksInProgress, SingleProjectPreview and store:project
=======
>>>>>>> 4224b51... add DeleteProjectForm
            <h2>{`${percent}%`}</h2>
            <div className="outer">
                <div style={{ width: `${percent}%` }} className="inner">

                </div>
            </div>
        </>
<<<<<<< HEAD

=======
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
>>>>>>> a7a24f6... add progress bar
=======

>>>>>>> a12bf0d... update changes from staging branch on src/App.js, components: ProgressBar, ProjectPreview, ProjectTasksInProgress, SingleProjectPreview and store:project
    );
}

export default ProgressBar;
