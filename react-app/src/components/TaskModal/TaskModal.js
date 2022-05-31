import { useSelector } from "react-redux";
import { useState } from "react";
import "./index.css"

const TaskModal = (taskId) => {

    const [comment, setComment] = useState("")

    const tasks = useSelector(state => state.tasks)
    const projects = useSelector(state => state.projects)
    const users = useSelector(state => state.teammates.allUsers)
    const comments = useSelector(state => state.comments)
    const cur_user = useSelector(state => state.session.user)
    // const task = tasks.taskId;


    // for testing
    let comments_arr;
    let task;

    if (tasks)
    {
        task = tasks[1]
        if (task)
        {
            comments_arr = Object.values(comments).filter(comment => comment.task_id === task.id)
        }
    }

    const getInitials = id => {
        const comment_author = users[id]
        const author_initials = comment_author.first_name.slice(0, 1) + comment_author.last_name.slice(0, 1)

        return author_initials
    }

    return (
        <div className="task">
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
                {comments_arr?.map((comment, idx) => (
                    <div className="comment" key={idx}>
                        <div className="person-circle-icon">
                            <p>{getInitials(comment.author_id)}</p>
                        </div>
                        <div className="comment-content">
                            <p>{users[comment?.author_id]?.first_name} {users[comment?.author_id]?.last_name}</p>
                            <p>{comment?.content}</p>
                        </div>
                    </div>
                ))}
                <div className="comment-input">
                    <div className="person-circle-icon">
                        <p>{getInitials(cur_user?.id)}</p>
                    </div>
                    <div>
                        <textarea
                            name="comment"
                            value={comment}
                            placeholder="Ask a question or post a comment"
                        />
                        <button>Comment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskModal;
