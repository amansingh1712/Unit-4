import React, { useState } from "react";
import { Question } from "./Question";

export const Slider = () => {
  let array = [
    {
      id: 1,
      question: "First Question",
      answer: "First Answer",
    },
    {
      id: 2,
      question: "Second Question",
      answer: "Second Answer",
    },
    {
      id: 3,
      question: "Third Question",
      answer: "Third Answer",
    },
    {
      id: 4,
      question: "Fourth Question",
      answer: "Fourth Answer",
    },
  ];
  const [index, setIndex] = useState(0);
  const handleClick = (val) => {
    setIndex(index + val);
  };
  return (
    <>
      <Question index={index} array={array} />
      {index !== 0 && <button onClick={() => handleClick(-1)}>Pre</button>}
      {index !== array.length - 1 && (
        <button onClick={() => handleClick(1)}>Next</button>
      )}
    </>
  );
};
