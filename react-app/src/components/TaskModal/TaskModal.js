import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "./index.css"

import Low from "../Priorities/Low";
import Medium from "../Priorities/Medium";
import High from "../Priorities/High";
import OffTrack from "../Statuses/OffTrack";
import AtRisk from "../Statuses/AtRisk";
import OnTrack from "../Statuses/OnTrack";
import { setComments, addComment, editComment, deleteComment } from "../../store/comments";

const TaskModal = ({ taskId }) => {

    const dispatch = useDispatch();
    const [commentContent, setCommentContent] = useState("");
    const [errors, setErrors] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState();

    const tasks = useSelector(state => state.tasks);
    const projects = useSelector(state => state.projects);
    const users = useSelector(state => state.teammates.allUsers);
    const comments = useSelector(state => state.comments);
    const cur_user = useSelector(state => state.session.user);

    useEffect(() => {
        (async () => {
            const res = await fetch("/api/comments");
            if (res.ok) {
                const data = await res.json();
                dispatch(setComments(data));
            }
        })();
    }, [dispatch]);

    users[cur_user.id] = cur_user;

    let comments_arr;
    let task;

    if (tasks) {
        task = tasks[taskId]
        if (task) {
            comments_arr = Object.values(comments).filter(comment => comment.task_id === task.id)
        }
    }

    const getInitials = id => {

        const comment_author = cur_user.id === id ? cur_user : users[id];
        const author_initials = comment_author?.first_name.slice(0, 1) + comment_author?.last_name.slice(0, 1)

        return author_initials
    }

    const renderPriority = (resource) => {
        if (resource.priority === "Low") {
            return <Low resource={resource} />;
        }
        if (resource.priority === "Medium") {
            return <Medium resource={resource} />;
        }
        if (resource.priority === "High") {
            return <High resource={resource} />;
        }
    };

    const renderStatus = (resource) => {
        if (resource.status === "Off track") {
            return <OffTrack resource={resource} />;
        }
        if (resource.status === "At risk") {
            return <AtRisk resource={resource} />;
        }
        if (resource.status === "On track") {
            return <OnTrack resource={resource} />;
        }
    };

    const getDate = date => {
        const createdDate = new Date(date);
        const created_date = createdDate.getDate();
        const created_month = createdDate.getMonth();
        const created_year = createdDate.getFullYear();

        const today = new Date();
        const today_date = today.getDate();
        const today_month = today.getMonth();
        const today_year = today.getFullYear();

        if (created_date + 1 === today_date && created_month === today_month && created_year === today_year) {
            return "Today"
        } else if (today_date - (created_date + 1) === 1 && created_month === today_month && created_year === today_year) {
            return "Yesterday"
        } else {
            const date = new Date(created_year, created_month, created_date + 1).toDateString();
            return date;
        }
    }

    const addCommentSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            content: commentContent,
        }

        const res = await dispatch(addComment(payload, taskId));

        if (!Array.isArray(res)) {
            setCommentContent("");
            setErrors([]);
        } else {
            const errors = res.map(error => error.split(":")[1].slice(1));
            setErrors(errors);
        }
    }

    const editCommentSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            content: commentContent,
        }

        const res = await dispatch(editComment(payload, editId));

        if (!Array.isArray(res)) {
            setCommentContent("");
            setErrors([]);
            setIsEdit(false);
            setEditId();
        } else {
            const errors = res.map(error => error.split(":")[1].slice(1));
            setErrors(errors);
        }
    }

    const handleEditCommentClick = (e, content) => {
        setCommentContent(content);
        setIsEdit(true);
        setEditId(e.target.id);
    }

    const handleDeleteClick = async (commentId) => {
        const res = await dispatch(deleteComment(commentId));

        if (!Array.isArray(res)) {
            setCommentContent("");
            setErrors([]);
            setIsEdit(false);
            setEditId();
        } else {
            const errors = res.map(error => error.split(":")[1].slice(1));
            setErrors(errors);
        }
    }

    return (
        <div className="task-container">
            <div className="task-overview">
                <div className="task-name">{task?.name}</div>
                <div className="about-task">
                    <div>Project:</div>
                    <div>{projects[task?.project_id]?.name}</div>
                    <div>Assignee:</div>
                    <div>{users[task?.assignee_id]?.first_name} {users[task?.assignee_id]?.last_name}</div>
                    <div>Due Date:</div>
                    <div>{task?.end_date}</div>
                    <div>
                        <i className="fa-regular fa-circle-check fa-lg"></i>
                        Priority
                    </div>
                    <div>{renderPriority(task)}</div>
                    <div>
                        <i className="fa-regular fa-circle-check fa-lg"></i>
                        Status:
                    </div>
                    <div>{renderStatus(task)}</div>
                    <div>Description:</div>
                    <div>{task?.description}</div>
                </div>
            </div>
            <div className="comments">
                <p>Comments:</p>
                <div
                    className={comments_arr.length > 1 ? "comments-container-full" : "comments-container-empty"}
                >
                    {comments_arr?.map((comment, idx) => (
                        <div className="comment" key={idx}>
                            <div className="person-circle-icon">
                                <p>{getInitials(comment?.author_id)}</p>
                            </div>
                            <div className="comment-content">
                                <div className="comment-header">
                                    <p className="author-name">
                                        {users[comment?.author_id]?.first_name} {users[comment?.author_id]?.last_name}
                                    </p>
                                    <p className="date">{getDate(comment.create_date)}</p>
                                    <div hidden={cur_user.id !== comment?.author_id}
                                        className="edit-delete-btns-container">
                                        <i id={comment?.id}
                                            className="fa-solid fa-pencil"
                                            onClick={(e) => handleEditCommentClick(e, comment?.content)}
                                        ></i>
                                        <i
                                            className="fa-solid fa-trash"
                                            onClick={(e) => handleDeleteClick(comment?.id)}
                                        ></i>
                                    </div>
                                </div>
                                <p>{comment?.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="comment-input">
                    {errors.length ? errors.map(error =>
                    (<div className="comment-error"
                        key="error">
                        {error}
                    </div>)) : null}
                    <div className="comment-input-container">
                        <div className="person-circle-icon">
                            <p>{getInitials(cur_user?.id)}</p>
                        </div>
                        <textarea
                            name="comment"
                            value={commentContent}
                            placeholder="Ask a question or post a comment"
                            onChange={(e) => setCommentContent(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={isEdit ? editCommentSubmit : addCommentSubmit}
                        disabled={commentContent.length ? false : true}
                    >
                        {isEdit ? "Edit" : "Comment"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskModal;
