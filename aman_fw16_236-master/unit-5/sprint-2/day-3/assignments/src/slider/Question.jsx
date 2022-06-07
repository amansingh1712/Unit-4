import React from "react";

export const Question = ({ array, index }) => {
  return (
    <>
      <div data-testid="question">Question: {array[index].question}</div>
      <div data-testid="answer">Answer: {array[index].answer}</div>
    </>
  );
};
