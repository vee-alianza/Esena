import { useState } from "react";
import EditProjectModal from "../EditProjectForm"

import "./index.css";

const DropdownMenu = ({ comp, permissions }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation();
        if (e.target.id === "dropdown-menu") {
            setIsClicked(true);
        }
    }

    window.onclick = function (event) {
        event.stopPropagation();
        if (event.target.id !== "dropdown-menu" && event.target.id !== "edit-form") {
            setIsClicked(false)
        }
    }

    return (
        <>
            <div
            className="dropdown-container"
                onClick={permissions ? (e) => handleClick(e) : undefined}
            >
                <i
                id="dropdown-menu"
                style={{ cursor: permissions ? "pointer" : "not-allowed" }}
                className="fa-solid fa-ellipsis fa-lg"></i>
                {isClicked && (
                    <div
                        id="dropdown-menu"
                        className="dropdown-menu"
                    >
                        {comp === "edit" ? <EditProjectModal setIsClicked={setIsClicked
                        }/> : <p>hi</p>}
                        <p>Delete Project</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default DropdownMenu;
