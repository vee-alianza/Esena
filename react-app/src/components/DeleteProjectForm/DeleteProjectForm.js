import { updateProject } from "../..store/projects";

const DeleteProjectForm = ({ setShowModal }) => {
    const project = projects[projectId];

    return (
        <>
            <div className="delete-form-container">
                <h3>Are you sure you want to delete {project.name}?</h3>
            </div>
            <div className="message-btns">
                <button
                    className="deleteBtn"
                    type="submit"

                >
                    Delete
                </button>
                <button
                    className="cancelBtn"
                    type="cancel"
                    onClick={() => setShowModal(false)}
                >
                    Cancel
                </button>

            </div>
        </>
    )
}
