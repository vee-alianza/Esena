import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ErrorMessage from "../ErrorMessage";
import "./index.css";

const TeammateSearch = ({
  placeholder,
  users,
  setTeammates,
  teammates,
  allUsers,
  edit,
  errors
}) => {
  const [searchedVal, setSearchedVal] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState(
    edit ? new Set(teammates) : new Set()
  );

  const sessionUser = useSelector((state) => state.session.user);
  delete allUsers[sessionUser.id];
  users = users.filter(user => user.id != sessionUser.id);
  teammates = teammates.filter((user) => user != sessionUser.id);


  const handleFilter = (e) => {
    setSearchedVal(e.target.value.toLowerCase());
    const newFilter = users.filter((member) =>
      member.email.includes(searchedVal.toLowerCase())
    );
    if (searchedVal === "") {
      setFilteredMembers([]);
    } else {
      setFilteredMembers(newFilter);
    }
  };

  const handleMemberSelect = (e) => {
    const newMembers = new Set(selectedMembers);
    newMembers.add(parseInt(e.target.id));
    setSelectedMembers(newMembers);
    const nextFilter = filteredMembers.filter(
      (member) => member.id != parseInt(e.target.id)
    );
    setFilteredMembers(nextFilter);
    setSearchedVal("");
  };

  const handleMemberDelete = (e) => {
    const updated = new Set(selectedMembers);
    updated.delete(parseInt(e.target.parentNode.id));
    setSelectedMembers(updated);
  };

  useEffect(() => {
    setTeammates(Array.from(selectedMembers));
  }, [selectedMembers]);

  return (
    <div className="form-teammate-container">
      <div className="names-container">
        {teammates?.length > 0 &&
          teammates?.map((member) => (
            <div
              className="teammate-selected"
              key={`teammember-${member}`}
              id={`${member}`}
            >
              {`${allUsers[member]?.first_name} ${allUsers[member]?.last_name}`}

              <i className="fa-solid fa-xmark" onClick={handleMemberDelete}></i>
            </div>
          ))}
      </div>
      <div className="search">
        <div className="searchInput">
          <label>Add Teammates</label>
          <input
            type="text"
            placeholder={placeholder}
            onChange={handleFilter}
            value={searchedVal}
          />
        </div>

        {searchedVal.length != 0 && (
          <div className="dataResult">
            {filteredMembers.slice(0, 8).map((member) => {
              return (
                <div
                  className="member-selection"
                  key={`${member.id}`}
                  id={member.id}
                  onClick={handleMemberSelect}
                >
                  {member?.first_name} {member?.last_name}
                </div>
              );
            })}
          </div>
        )}
      <ErrorMessage label={""} message={errors} />
      </div>
    </div>
  );
};

export default TeammateSearch;
