import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editProfile } from "../../store/profile";
import { authenticate } from "../../store/session";
import ErrorMessage from "../ErrorMessage";
import "./index.css";

const EditProfileForm = ({ setShowModal }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.profile);

  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [occupation, setOccupation] = useState(user.occupation);
  const [bio, setBio] = useState(user.bio);

  const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

      const payload = {
        first_name: firstName,
        last_name: lastName,
        occupation,
        bio,
        email: user.email,
      };

      const res = await dispatch(editProfile(payload, user.id));
      await dispatch(authenticate());

    if (res === null) {
      setShowModal(false);
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
    <div className="edit-profile-form-container">
      <ErrorMessage label={""} message={errorMessages.overall} />
      <div className="form-header">
        <h1>Edit Your Profile</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="edit-profile-form-grouping">
          <div className="edit-profile-form-control">
            <label>First Name</label>
            <input
              name="first name"
              placeholder="Enter a first name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <ErrorMessage label={""} message={errorMessages.first_name} />
          </div>
          <div className="edit-profile-form-control">
            <label>Last Name</label>
            <input
              name="last name"
              placeholder="Enter a last name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <ErrorMessage label={""} message={errorMessages.last_name} />
          </div>
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
          <ErrorMessage label={""} message={errorMessages.occupation} />
        </div>
        <div className="form-control">
          <label>Bio</label>
          <textarea
            name="Bio"
            placeholder="Enter bio here"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <ErrorMessage label={""} message={errorMessages.bio} />
        </div>
        <div className="edit-profile-form-footer">
          <button
            className="cancelBtn edit-prof-btn cncl"
            type="cancel"
            onClick={(e) => {
              e.preventDefault()
              setShowModal(false)
            }}
          >
            Cancel
          </button>
          <button className="submitBtn edit-prof-btn" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditProfileForm;
