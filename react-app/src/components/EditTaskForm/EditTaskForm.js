import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editTask } from "../../store/tasks";
import Select from "react-select";
import CompleteTaskButton from "../CompleteTaskButton";
import ErrorMessage from "../ErrorMessage";
import "./EditTaskForm.css";

const EditTaskForm = ({
  setShowModal,
  taskId,
  projectName,
  projectEndDate,
}) => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks[taskId]);
  const projectId = task?.project_id;

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
  teammates.push(ownerObj);

  const [month, date, year] = task.end_date.split("/");
  const prevEndDate = `${year}-${month}-${date}`;

  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [endDate, setEndDate] = useState(prevEndDate);
  const [priority, setPriority] = useState(task.priority_id);
  const [status, setStatus] = useState(task.status_id);
  const [assignee, setAssignee] = useState(task.assignee_id.toString());

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

    const res = await dispatch(editTask(payload, taskId));

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
    if (endDate !== prevEndDate) {

      const [projectMonth, projectDate, projectYear] = projectEndDate.split("/");
      const projectEnd = new Date(projectYear, projectMonth - 1, projectDate)

      const taskEnd = new Date(endDate);

      const today = new Date();

      if (taskEnd.getTime() < today.getTime()) {
        return "End date cannot be in the past"
      }
      if (taskEnd.getTime() > projectEnd.getTime()) {
        return `End date should be before project ends (${projectEndDate})`;
      }
    }
    return null;
  };


  return (
    <div className="form-outer-container">
      <ErrorMessage label={""} message={errorMessages.overall} />
      <div className="form-header">
        <h1>Edit Task</h1>
        <p className="task-project-name">{projectName}</p>
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
              defaultValue={assigneeOptions.filter(
                (option) => option.value == assignee
              )}
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
              defaultValue={priorityOptions.filter(
                (option) => option.value == priority
              )}
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
              defaultValue={statusOptions.filter(
                (option) => option.value == status
              )}
              onChange={(option) => setStatus(option.value)}
              placeholder="Select a status..."
            />
            <ErrorMessage label={""} message={errorMessages.status_id} />
          </div>
        </div>

        <div className="form-control">
          <label>Task Description</label>
          <textarea
            name="description"
            placeholder="Enter description here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <ErrorMessage label={""} message={errorMessages.description} />
        </div>
        <div className="edit-task-footer-btns">
          <CompleteTaskButton taskId={taskId} setShowModal={setShowModal} />
          <div className="task-footer-grouping">
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowModal(false);
              }}
              className="cancelBtn edit-tsk-btns"
              type="cancel"
            >
              Cancel
            </button>
            <button className="submitBtn edit-tsk-btns" type="submit">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EditTaskForm;
