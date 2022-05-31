import { useState } from "react";
import { Modal } from "../../context/Modal";
import TaskModal from "./TaskModal";



const SingleTask = ({taskName, taskId}) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <td
                className="project-name-hover"
                onClick={() => setShowModal(true)}>
                {taskName}
            </td>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <TaskModal taskId={taskId}/>
                </Modal>
            )}
        </>
    )
}

export default SingleTask;
