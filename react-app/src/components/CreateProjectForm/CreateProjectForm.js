import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useHistory } from "react-router-dom";

import { addProject } from "../../store/projects";
import TeammateSearch from "../TeammateSearch";
import ErrorMessage from "../ErrorMessage";
import "./CreateProjectForm.css";

const CreateProjectForm = ({ setShowModal }) => {
  const dispatch = useDispatch();

  const session = useSelector((state) => state.session.user);
  const allUsers = useSelector((state) => state.teammates.allUsers);
  const allUserObjects = Object.values(allUsers);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState({});
  const [status, setStatus] = useState({});
  const [teammates, setTeammates] = useState([]);
  const [isPrivate, setIsPrivate] = useState(false);

  const [errorMessages, setErrorMessages] = useState({});

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

  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      description,
      start_date: startDate,
      end_date: endDate,
      is_private: isPrivate,
      priority_id: parseInt(priority),
      status_id: parseInt(status),
      members: teammates.filter((user) => user != session.id).join(" "),
    };

    const res = await dispatch(addProject(payload, session.id));
    if (!Array.isArray(res)) {
      setShowModal(false);
      history.push(`/projects/${res.id}`);
    } else {
      const errors = {};
      if (Array.isArray(res)) {
        res.forEach(error => {
          const label = error.split(":")[0].slice(0, -1)
          const message = error.split(":")[1].slice(1)
          errors[label] = message;
        })
      } else {
        errors.overall = res;
      }
      setErrorMessages(errors);
    }
  };

  return (
    <div className="form-container">
      <ErrorMessage label={""} message={errorMessages.overall} />
      <div className="form-header">
        <h1>Create Project</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Project Name</label>
          <input
            name="name"
            placeholder="Enter a project name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <ErrorMessage label={""} message={errorMessages.name} />
        </div>
        <div className="form-grouping">
          <div className="form-control">
            <label>Start Date</label>
            <input
              className="date-input"
              placeholder="Choose a start date"
              type="date"
              name="start_date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <ErrorMessage label={""} message={errorMessages.start_date} />
          </div>
          <div className="form-control">
            <label>End Date</label>
            <input
              className="date-input"
              placeholder="Choose an end date"
              type="date"
              name="end_date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <ErrorMessage label={""} message={errorMessages.end_date} />
          </div>
        </div>

        <TeammateSearch
          placeholder={"Search for a teammate"}
          users={allUserObjects}
          setTeammates={setTeammates}
          teammates={teammates}
          allUsers={allUsers}
          errors={errorMessages.members}
        />
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
          <label>Project Description</label>
          <textarea
            name="description"
            placeholder="Enter description here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <ErrorMessage label={""} message={errorMessages.description} />
        </div>
        <div className="form-footer">
          <div className="private-container">
            <label>Private Project?</label>
            <input
              name="is_private"
              type="checkbox"
              checked={isPrivate}
              onChange={(e) => setIsPrivate(!isPrivate)}
            ></input>
          </div>
          <div className="footer-btns">
            <button
              className="cancelBtn"
              type="cancel"
              onClick={(e) => {
                e.preventDefault()
                setShowModal(false)}}
            >
              Cancel
            </button>
            <button className="submitBtn" type="submit">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProjectForm;
