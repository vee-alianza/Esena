import { useSelector } from "react-redux";

const TaskModal = (taskId) => {

    const tasks = useSelector(state => state.tasks)
    const projects = useSelector(state => state.projects)
    const users = useSelector(state => state.teammates.allUsers)
    // const task = tasks.taskId;


    // for testing
    const task = tasks[1]

    // const comments = Object.values(task.comments)
    // console.log(comments)
    // const comment = comments[0]
    // console.log(comment)

    const getInitials = id => {
        const comment_author = users[id]
        const author_initials = comment_author.first_name.slice(0, 1) + comment_author.last_name.slice(0, 1)

        return author_initials
    }

    return (
        <div>
            <div className="task-overview">
                <div>{task?.name}</div>
                <div>
                    <div>Project:</div>
                    <div>{projects[task?.project_id]?.name}</div>
                    <div>Assignee:</div>
                    <div>{users[task?.assignee_id]?.first_name} {users[task?.assignee_id]?.last_name}</div>
                    <div>Due Date:</div>
                    <div>{task?.end_date}</div>
                    <div>Priority</div>
                    <div>{task?.priority}</div>
                    <div>Status:</div>
                    <div>{task?.status}</div>
                    <div>Description:</div>
                    <div>{task?.description}</div>
                </div>
            </div>
            <div className="comments">
                <p>Comments:</p>
            </div>
        </div>
    )
}

export default TaskModal;
