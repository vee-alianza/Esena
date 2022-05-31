import { useState } from "react";
import "./index.css";
const TeammateSearch = ({ placeholder, users, setMembers, setTeammates }) => {
  const [searchedVal, setSearchedVal] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState(new Set());

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
    selectedMembers.add(parseInt(e.target.id));
    setMembers(Array.from(selectedMembers).join(" "));
    setTeammates(Array.from(selectedMembers));
    const nextFilter = filteredMembers.filter(
      (member) => member.id != parseInt(e.target.id)
    );
    setFilteredMembers(nextFilter);
    setSearchedVal("");
  };

  return (
    <div className="search">
      <div className="searchInput">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
          value={searchedVal}
        />
      </div>
      {filteredMembers.length != 0 && (
        <div className="dataResult">
          {filteredMembers.slice(0, 8).map((member) => {
            return (
              <div
                className="member-selection"
                key={`${member.id}`}
                id={member.id}
                onClick={handleMemberSelect}
              >
                {member.first_name} {member.last_name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TeammateSearch;
