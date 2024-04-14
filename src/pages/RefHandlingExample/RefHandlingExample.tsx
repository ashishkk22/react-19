import Title from "antd/es/typography/Title";
import React, { MutableRefObject, useReducer, useRef } from "react";

type ButtonProps = {
  ref: MutableRefObject<HTMLButtonElement | null>;
  incrementCount: () => void;
};

const Button: React.FC<ButtonProps> = ({ ref, incrementCount }) => {
  return (
    <button ref={ref} onClick={incrementCount}>
      Increment
    </button>
  );
};

const RefHandlingExample = () => {
  const [counter, dispatch] = useReducer(state => state + 1, 0);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <Title>Ref Handling Example</Title>
      <div>Counter: {counter}</div>
      <Button ref={buttonRef} incrementCount={dispatch} />
    </>
  );
};

export default RefHandlingExample;
