import React from "react";

const VoteCard = ({ id, image, name, party, vote, onClick }) => {
  // function handleClick() {
  //   alert(`You Voted for ${name}`);
  // }
  return (
    <>
      <div key={id}>
        <div className="vote-card">
          <img src={image} alt="candidate-img" />
          <div className="vote-name">{name}</div>
          <div className="vote-party">{party}</div>
          <button vote={vote} onClick={onClick}>Vote</button>
        </div>
      </div>
    </>
  );
};

export default VoteCard;
