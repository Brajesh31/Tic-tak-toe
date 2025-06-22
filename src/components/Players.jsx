import React, { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  // its recommneded in react whenever we want to  update any state using its previos state value then you are not allwed to do it directly like below
  //   function handleEditClick() {
  //     setIsEditing(!isEditing); => shedules a state updtae to true
  //     setIsEditing(!isEditing); => schedules a state update to true
  //   }

  // instead you should pass a function to your state updating the function
  //   function handleEditClick() {
  //     setIsEditing((editing) => !editing); => shedules a state updtae to true
  //    setIsEditing((editing) => !editing); => schedules a state update to false
  //   }

  //this function will automatically called by react and will recieve the guarenteed state value
  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //   let buttonCaption = "Edit";
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        defaultValue={playerName}
        onChange={handleChange}
      />
    );
    // buttonCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player highlight-player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
  //   return (
  //     <li>
  //       <span className="player">
  //         {isediting && <input type="text" defaultValue={name} />}
  //         {!isediting && <span className="player-name">{name}</span>}
  //         <span className="player-symbol">{symbol}</span>
  //       </span>
  //       <button onClick={handleEditClick}>Edit</button>
  //     </li>
  //   );
}

export default Player;
