import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { addProject, updateProject } from "../../store/projects";
import TeammateSearch from "../TeammateSearch";
import "./EditProjectForm.css";

const EditProjectForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  //   const session = useSelector((state) => state.session.user);
  const projects = useSelector((state) => state.projects);
  const allUsers = useSelector((state) => state.teammates.allUsers);
  const allUserObjects = Object.values(allUsers);

  const project = projects[projectId];

  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [startDate, setStartDate] = useState(
    new Date(project.start_date).toISOString().split("T")[0]
  );
  const [endDate, setEndDate] = useState(
    new Date(project.end_date).toISOString().split("T")[0]
  );
  const [priority, setPriority] = useState(project.priority_id);
  const [status, setStatus] = useState(project.status_id);
  const [teammates, setTeammates] = useState([...project.members]);
  const [isPrivate, setIsPrivate] = useState(false);

  const [validationErrors, setValidationErrors] = useState([]);

  const priorityOptions = [
    { label: "Low", value: "1" },
    { label: "Medium", value: "2" },
    { label: "High", value: "3" },
  ];
  const statusOptions = [
    { label: "On Track", value: "1" },
    { label: "At Risk", value: "2" },
    { label: "Off Track", value: "3" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validationErrors.length) {
      const payload = {
        name,
        description,
        start_date: startDate,
        end_date: endDate,
        is_private: isPrivate,
        priority_id: parseInt(priority),
        status_id: parseInt(status),
        members: teammates.join(" "),
      };
      dispatch(updateProject(payload, projectId));
      setShowModal(false);
    }
  };
  useEffect(() => {
    const errors = [];
    if (!name) errors.push("Please enter a project name!");
    if (!description)
      errors.push(
        "Your teammates want to know what the project is about! Please enter a description."
      );
    setValidationErrors(errors);
  }, [name, description]);

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Edit Project</h1>
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
          </div>
        </div>

        <TeammateSearch
          placeholder={"Search for a teammate"}
          users={allUserObjects}
          setTeammates={setTeammates}
          teammates={teammates}
          allUsers={allUsers}
          edit={true}
        />
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
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button className="submitBtn" type="submit">
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProjectForm;
