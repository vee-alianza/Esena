import { useState } from "react";
import EditProjectModal from "../EditProjectForm"

import "./index.css";

const DropdownMenu = ({ comp }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        setIsClicked(!isClicked);
    }

    window.onclick = function (event) {
        if (event.target.id !== "dropdown-menu") {
            setIsClicked(false)
        }
    }

    return (
        <>
            <div
            className="dropdown-container"
            onClick={(e) => handleClick(e)}
            >
                <i
                id="dropdown-menu"
                className="fa-solid fa-ellipsis fa-lg"></i>
                {isClicked && (
                    <div
                        id="dropdown-menu"
                        className="dropdown-menu"
                    >
                        {comp === "edit" ? <EditProjectModal /> : <p>hi</p>}
                        <p>Delete Project</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default DropdownMenu;
