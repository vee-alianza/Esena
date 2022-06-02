import { useState } from "react";
import EditProjectModal from "../EditProjectForm"

import "./index.css";

const DropdownMenu = ({ comp }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        setIsClicked(!isClicked);
        console.log(e.target)
    }

    const handleEditClick = () => {}

    return (
        <>
            <div className="dropdown-container"
            onClick={(e) => handleClick(e)}
            >
                <i className="fa-solid fa-ellipsis fa-lg"></i>
                {isClicked && (
                    <div
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
