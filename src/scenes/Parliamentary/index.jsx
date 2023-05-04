import React from "react";
import "./parliamentary.css";
import { presidentialData } from "../../data/constituencies";
import VoteCard from "../../components/global/VoteCard/voteCard";
import NextButton from "../../components/global/NextButton/NextButton";

const Parliamentary = () => {
  return (
    <>
      <h3 className="p-container">PARLIAMENTARY</h3>
      <div className="card-container">
        {presidentialData.map((presidential) => {
          const { id, image, name, party } = presidential;
          return <VoteCard id={id} image={image} name={name} party={party} />;
        })}
      </div>
      <NextButton />
    </>
  );
};

export default Parliamentary;
