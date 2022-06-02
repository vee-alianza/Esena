import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useParams } from "react-router-dom";
import { createTask } from "../../store/tasks";
import "./CreateTaskForm.css";

const CreateTaskForm = ({ setShowModal, projectName }) => {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  const allUsers = useSelector((state) => state.teammates.allUsers);
  const currentTeammatesIds = useSelector(
    (state) => state.projects[projectId].members
  );
  const teammates = Object.values(allUsers).filter((user) =>
    currentTeammatesIds.includes(user.id)
  );

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState(new Date());
  const [priority, setPriority] = useState({});
  const [status, setStatus] = useState({});
  const [assignee, setAssignee] = useState({});

  const [validationErrors, setValidationErrors] = useState([]);

  const assigneeOptions = teammates.map((teammate) => {
    return { label: `${teammate.first_name}`, value: `${teammate.id}` };
  });

  const priorityOptions = [
    { label: "Low", value: "1" },
    { label: "Medium", value: "2" },
    { label: "High", value: "3" },
  ];
  const statusOptions = [
    { label: "Off Track", value: "1" },
    { label: "At Risk", value: "2" },
    { label: "On Track", value: "3" },
  ];

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
      };
      dispatch(createTask(payload, projectId));
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
    <div className="form-outer-container">
      <div className="form-header">
        <h1>Add Task</h1>
        <p className="task-project-name">{projectName}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-inner-container">
          <div className="add-task-form-control">
            <label>Task Name</label>
            <input
              name="name"
              placeholder="Enter a task name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="add-task-form-grouping">
            <div className="second-form-control">
              <label>End Date</label>
              <input
                type="date"
                name="end_date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <div className="third-form-control">
              <label>Assign Team Member</label>
              <Select
                id="assign-member"
                name="assignee_id"
                options={assigneeOptions}
                value={assignee.value}
                onChange={(option) => setAssignee(option.value)}
                placeholder="Select a member..."
              />
            </div>
          </div>
          <div className="form-grouping-select">
            <div className="select-control">
              <label>Priority</label>
              <Select
                options={priorityOptions}
                value={priority.value}
                onChange={(option) => setPriority(option.value)}
                placeholder="Select a priority..."
              />
            </div>
            <div className="select-control">
              <label>Status</label>
              <Select
                options={statusOptions}
                value={status.value}
                onChange={(option) => setStatus(option.value)}
                placeholder="Select a status..."
              />
            </div>
          </div>
          <div className="form-control">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Enter description here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="add-task-footer-btns">
          <button className="add-task-cancelBtn" type="cancel">
            Cancel
          </button>
          <button className="submitBtn add-task-btn" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskForm;
