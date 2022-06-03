import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { updateProject } from "../../store/projects";
import TeammateSearch from "../TeammateSearch";
import ErrorMessage from "../ErrorMessage";
import "./EditTeammateForm.css";

const EditTeammateForm = ({ setShowModal, setIsClicked }) => {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  const session = useSelector((state) => state.session.user);
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
      members: teammates.filter((use) => use.id != session.id).join(" "),
    };
    console.log(payload);
    const res = await dispatch(updateProject(payload, projectId));
    if (res === null) {
      setShowModal(false);
      setIsClicked(false);
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

  return (
    <div className="form-container" id="edit-team-form">
      <ErrorMessage label={""} message={errorMessages.overall} />
      <div className="form-header">
        <h1>Add or Remove Teammates</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <TeammateSearch
          placeholder={"Search for a teammate..."}
          users={allUserObjects}
          setTeammates={setTeammates}
          teammates={teammates}
          allUsers={allUsers}
          edit={true}
          errors={errorMessages.members}
        />
        <div className="edit-teammate-form-footer">
          <div className="footer-btns">
            <button
              className="cancelBtn"
              type="cancel"
              onClick={(e) => {
                e.preventDefault();
                setShowModal(false);
              }}
            >
              Cancel
            </button>
            <button className="submitBtn" type="submit" id="save-changes-btn">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTeammateForm;
