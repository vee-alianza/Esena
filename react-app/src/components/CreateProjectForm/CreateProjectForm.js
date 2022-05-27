import { useState, useEffect } from "react";
import "./CreateProjectForm.css";

const CreateProjectForm = ({ setShowModal }) => {
  const userId = "4"; //TODO: GET CURRENT SESSION USER ID FROM STORE

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [priority, setPriority] = useState("1");
  const [status, setStatus] = useState("1");
  const [members, setMembers] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const [validationErrors, setValidationErrors] = useState([]);

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
        members,
      };

      // TODO: NEEDS DISPATCH
      const res = await fetch(`/api/users/${userId}/projects`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          csrf_token:
            "IjRiY2M4MWNlMDkwNGJlZjRlMTJhMzBhMWUxNGI0OTM4NWU4ODNjODQi.YpErDA.6EwPVYrY3XlCfjRRkORGl6nf3KI",
          session:
            ".eJwljkFqBDEMBP_icw6yLdnyfmaQrDa7BBKY2T2F_D1ecqymKeonHevEdU-35_nCRzoekW6pZDZbXpV6gRDr4G7DlhhHD60VHkouGZnZSm-cF2VZStaabgw0FZkrXKuBSACTPprkcJfwCglsH1VgeutzX2yUCRl9lJF2yOvC-V_DG-d1ruP5_Ymv9-Bzap6gQexYjFyskr1rnEdVgWqdyun3D-1LP3k.YpErCw.1x5DFcj9BOkWgfXiimYgGpvOiMo",
        },
      });
      const data = await res.json();
      console.log(data);
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
    <div>
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
        <div className="form-grouping">
          <div className="form-control">
            <label>Start Date</label>
            <input
              placeholderText={"Choose a start date"}
              type="date"
              name="start_date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
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
          <label>Add Teammates</label>
          <input
            name="members"
            placeholder="Search for teammates..."
            type="text"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Private Project?</label>
          <input
            name="is_private"
            type="checkbox"
            checked={isPrivate}
            onChange={(e) => setIsPrivate(!isPrivate)}
          ></input>
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

export default CreateProjectForm;
