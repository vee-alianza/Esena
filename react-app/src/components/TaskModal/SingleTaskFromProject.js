import { useState } from "react";
import { Modal } from "../../context/Modal";
import TaskModal from "./TaskModal";



const SingleTaskFromProject = ({taskName, taskId}) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <div
                className="project-name-hover"
                onClick={() => setShowModal(true)}>
                {taskName}
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <TaskModal taskId={taskId}/>
                </Modal>
            )}
        </>
    )
}

export default SingleTaskFromProject;
