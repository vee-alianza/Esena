import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { editTask } from "../../store/tasks";

const EditTaskForm = ({ setShowModal, taskId }) => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks[taskId]);
  const projectId = task?.project_id;
  //get teammates from store
  //   const teammates = [{id: "1", first_name: "John"}, {id: "2", first_name: "Leah"}]
  const allUsers = useSelector((state) => state.teammates.allUsers);
  const currentTeammatesIds = useSelector(
    (state) => state.projects[projectId].members
  );
  const teammates = allUsers.filter((user) =>
    currentTeammatesIds.includes(user.id)
  );
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [endDate, setEndDate] = useState(new Date(task.end_date));
  const [priority, setPriority] = useState(task.priority_id);
  const [status, setStatus] = useState(task.status_id);
  const [assignee, setAssignee] = useState(task.assignee_id);
  const [isCompleted, setIsCompleted] = useState(task.is_completed);

  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validationErrors.length) {
      const payload = {
        name,
        description,
        end_date: endDate,
        priority_id: parseInt(priority),
        status_id: parseInt(status),
        assignee_id: parseInt(assignee),
        is_completed: isCompleted
      };
      console.log(payload);

      dispatch(editTask(payload, taskId));

      setShowModal(false);
    }
  };

  useEffect(() => {
    const errors = [];
    if (!name) errors.push("Please enter a task name!");
    if (!description)
      errors.push(
        "Your teammates want to know what the task is about! Please enter a description."
      );
    setValidationErrors(errors);
  }, [name, description]);

  return (
    <div>
      <div className="form-header">
        <h1>Edit Task</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Task Name</label>
          <input
            name="name"
            placeholder="Enter a task name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-grouping">
          <div className="form-control">
            <label>End Date</label>
            <input
              placeholderText={"Choose an end date"}
              type="date"
              name="end_date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="form-control">
          <label>Assign Team Member</label>
          <select
            name="assignee_id"
            onChange={(e) => setAssignee(e.target.value)}
            value={assignee}
          >
            <option value={-1}>select a teammate</option>
            {teammates.map((teammate) => (
              <option value={teammate.id}>{teammate.first_name}</option>
            ))}
          </select>
        </div>
        <div className="form-grouping">
          <div className="form-control">
            <label>Priority </label>
            <select
              name="priority_id"
              onChange={(e) => setPriority(e.target.value)}
              value={priority}
            >
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>
          </div>
          <div className="form-control">
            <label>Status</label>
            <select
              name="status_id"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            >
              <option value="1">Off Track</option>
              <option value="2">At Risk</option>
              <option value="3">On Track</option>
            </select>
          </div>
        </div>
        {/* TODO: SEPARATE SEARCH COMPONENT */}

        <div className="form-control">
          <label>Task Description</label>
          <textarea
            name="description"
            placeholder="Enter description here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-control">
          <label>Completed?</label>
          <input
            name="description"
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(!isCompleted)}
          ></input>
        </div>
        <button className="cancelBtn" type="cancel">
          Cancel
        </button>
        <button className="submitBtn" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};
export default EditTaskForm;
