import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useParams } from "react-router-dom";
import { createTask } from "../../store/tasks";
import ErrorMessage from "../ErrorMessage";
import "./CreateTaskForm.css";

const CreateTaskForm = ({ setShowModal, projectName, projectEndDate }) => {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  const sessionUser = useSelector((state) => state.session.user);
  const allUsers = useSelector((state) => state.teammates.allUsers);
  const currentTeammatesIds = useSelector(
    (state) => state.projects[projectId].members
  );

  const teammates = Object.values(allUsers).filter((user) =>
    currentTeammatesIds.includes(user.id)
  );

  const projects = useSelector((state) => state.projects);
  const ownerId = projects[projectId].owner_id;
  const ownerObj = allUsers[ownerId];
  if (ownerObj) {
    teammates.push(ownerObj);
  } else {
    teammates.push(sessionUser);
  }

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState({});
  const [status, setStatus] = useState({});
  const [assignee, setAssignee] = useState({});

  const [errorMessages, setErrorMessages] = useState({});

  const assigneeOptions = teammates.map((teammate) => {
    return { label: `${teammate?.first_name}`, value: `${teammate?.id}` };
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

    const payload = {
      name,
      description,
      end_date: endDate,
      priority_id: parseInt(priority),
      status_id: parseInt(status),
      assignee_id: parseInt(assignee),
    };
    const res = await dispatch(createTask(payload, projectId));
    if (res === null) {
      setShowModal(false);
    } else {
      const errors = {};
      if (Array.isArray(res)) {
        res.forEach((error) => {
          const label = error.split(":")[0].slice(0, -1);
          const message = error.split(":")[1].slice(1);
          errors[label] = message;
        });
      } else {
        errors.overall = res;
      }
      setErrorMessages(errors);
    }
  };

  const checkDates = () => {
    const [projectMonth, projectDate, projectYear] = projectEndDate.split("/");
    const projectEnd = new Date(projectYear, projectMonth - 1, projectDate);

    const taskEnd = new Date(endDate);

    const today = new Date();

    if (taskEnd.getTime() < today.getTime()) {
      return "End date cannot be in the past";
    }
    if (taskEnd.getTime() > projectEnd.getTime()) {
      return `End date should be before project ends (${projectEndDate})`;
    }

    return null;
  };

  return (
    <div className="form-outer-container">
      <ErrorMessage label={""} message={errorMessages.overall} />
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
            <ErrorMessage label={""} message={errorMessages.name} />
          </div>
          <div className="add-task-form-grouping">
            <div className="second-form-control">
              <label>End Date</label>
              <input
                type="date"
                name="end_date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="date-input"
              />
              <div className="error-message">{checkDates()}</div>
              <ErrorMessage label={""} message={errorMessages.end_date} />
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
              <ErrorMessage label={""} message={errorMessages.assignee_id} />
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
              <ErrorMessage label={""} message={errorMessages.priority_id} />
            </div>
            <div className="select-control">
              <label>Status</label>
              <Select
                options={statusOptions}
                value={status.value}
                onChange={(option) => setStatus(option.value)}
                placeholder="Select a status..."
              />
              <ErrorMessage label={""} message={errorMessages.status_id} />
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
            <ErrorMessage label={""} message={errorMessages.description} />
          </div>
        </div>
        <div className="add-task-footer-btns">
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowModal(false);
            }}
            className="add-task-cancelBtn"
            type="cancel"
          >
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
