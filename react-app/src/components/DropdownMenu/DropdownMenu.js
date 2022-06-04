import { useStateIfMounted } from "use-state-if-mounted";
import EditProjectModal from "../EditProjectForm"
import DeleteProjectModal from "../DeleteProjectForm"

import "./index.css";

const DropdownMenu = ({ comp, permissions }) => {
    const [isClicked, setIsClicked] = useStateIfMounted(false);

    const handleClick = (e) => {
        e.stopPropagation();
        if (e.target.id === "dropdown-menu") {
            setIsClicked(!isClicked);
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
                style={{ display: permissions ? "block" : "none" }}
                className="fa-solid fa-ellipsis fa-lg"></i>
                {isClicked && (
                    <div
                        id="dropdown-menu"
                        className="dropdown-menu"
                    >
                        {comp === "edit" ? <EditProjectModal setIsClicked={setIsClicked} /> : <p>hi</p>}
                        <DeleteProjectModal setIsClicked={setIsClicked} />
                    </div>
                )}
            </div>
        </>
    )
}

export default DropdownMenu;
