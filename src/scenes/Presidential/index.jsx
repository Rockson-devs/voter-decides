import React, { useState } from "react";
import "./presidential.css";
import { presidentialData } from "../../data/constituencies";
import VoteCard from "../../components/global/VoteCard/voteCard";
import { useNavigate } from "react-router-dom";
import NextButton from "../../components/global/NextButton/NextButton";
import Modal from "../../components/global/Modal/Modal";

const Presidential = () => {
  const [vote, setVote] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  let [candidatename, setCandidatename] = useState("");
  let navigate = useNavigate();
  return (
    <>
      <h3 className="p-container">PRESIDENTAL</h3>
      <div className="card-container">
        {presidentialData.map((presidential) => {
          const { id, image, name, party } = presidential;
          function handleVote() {
            candidatename = name;
            setVote(!vote);
            setCandidatename(candidatename);

          //   if (!vote) {
          //     // alert(`You have voted for ${name}`);
          //     {
          //       vote && <Modal setVote={setVote} />;
          //     }
          //   } else {
          //     alert(`You have already voted for ${candidatename}`);
          //     navigate("/parliamentary");
          //   }
          // }
           {
                vote && <Modal setVote={setVote} />;
              }
            }
          return (
            <VoteCard
              id={id}
              image={image}
              name={name}
              party={party}
              vote={vote}
              onClick={handleVote}
            />
          );
        })}
      </div>
      <NextButton />
    </>
  );
};

export default Presidential;
