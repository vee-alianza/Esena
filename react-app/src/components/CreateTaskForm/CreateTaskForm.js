import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../store/tasks";
// import "./CreateProjectForm.css";

const CreateTaskForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const userId = 4; //TODO: GET CURRENT SESSION USER ID FROM STORE
  const projectId = 1;
  //get teammates from store
  //   const teammates = [{id: "1", first_name: "John"}, {id: "2", first_name: "Leah"}]
  const allUsers = useSelector((state) => state.teammates.allUsers);
  const currentTeammatesIds = useSelector(
    (state) => state.projects.joinedProjects[projectId].members
  );
  const teammates = allUsers.filter((user) =>
    currentTeammatesIds.includes(user.id)
  );
  //   console.log(teammates);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState(new Date());
  const [priority, setPriority] = useState("1");
  const [status, setStatus] = useState("1");
  const [assignee, setAssignee] = useState(-1);

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
      };
      console.log(payload);
      // TODO: NEEDS DISPATCH

      let newTask = await dispatch(createTask(payload, projectId));

      //   const res = await fetch(`/api/projects/${projectId}/tasks`, {
      //     method: "POST",
      //     body: JSON.stringify(payload),
      //     headers: {
      //       "Content-Type": "application/json",
      //       csrf_token:
      //         "Ijk4MmI4OGVjMDZlMjNjYTQzZDg3ZDE5NDgxNDFiNGNjOGZjZTc1Y2Qi.YpGKew.R2ToeH5ctzGz4whh7Oydw83gzHA",
      //       session:
      //         ".eJwljkuKAzEMRO_idRbWx5KcyzS2JDNDYAa6k1XI3ccwyyrqFe9djnXm9VXuz_OVt3J8R7kXcE6qvASEU1THRCASttommo7UyN5UIsl7E8eEbr1SC8o9nVFXRUVmEF2BNk0tk5pDIgQtGyIbAO5YkZ2yrZlzwD6UuRTLFnldef7b8I5-net4_j7yZxfdcJqlV0kkH0xhGtDZgGGyuy1PbR7l8wdCoj6t.YpFE1A.1q3CEYFChWw4jz9ndQ7houTrA5A",
      //     },
      //   });
      //   const data = await res.json();
      //   console.log(data);
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
        <h1>Create Task</h1>
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
          <label>Add Assignee</label>
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
        <button className="cancelBtn" type="cancel">
          Cancel
        </button>
        <button className="submitBtn" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
