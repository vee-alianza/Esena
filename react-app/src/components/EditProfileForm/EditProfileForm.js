import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { editProfile } from "../../store/profile";
import { authenticate } from "../../store/session";
import CompleteTaskButton from "../CompleteTaskButton";

const EditProfileForm = ({ setShowModal }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.profile);

  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [occupation, setOccupation] = useState(user.occupation);
  const [bio, setBio] = useState(user.bio);


  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validationErrors.length) {
      const payload = {
        first_name: firstName,
        last_name: lastName,
        occupation,
        bio,
        email: user.email,
      };
        console.log(payload);

      await dispatch(editProfile(payload, user.id));
      await dispatch(authenticate())

      setShowModal(false);
    }
  };

  useEffect(() => {
    const errors = [];
    if (!firstName) errors.push("Please enter a first name!");
    if (!lastName) errors.push("Please enter a last name!");
    if (!occupation) errors.push("Please enter an occupation!");
    setValidationErrors(errors);
  }, [firstName, lastName, occupation]);

  return (
    <div>
      <div className="form-header">
        <h1>Edit Your Profile</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>First Name</label>
          <input
            name="first name"
            placeholder="Enter a first name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>Last Name</label>
          <input
            name="last name"
            placeholder="Enter a last name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>Occupation</label>
          <input
            name="occupation"
            placeholder="Enter your occupation"
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>Bio</label>
          <textarea
            name="Bio"
            placeholder="Enter bio here"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
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
export default EditProfileForm;
