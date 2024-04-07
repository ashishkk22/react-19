import Title from "antd/es/typography/Title";
import { memo, useState } from "react";

const OuterComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Outer Component</h2>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment Counter</button>
      <InnerComponent />
    </div>
  );
};

const InnerComponent = memo(() => {
  console.log("re rendered");
  return (
    <div>
      <h3>Inner Component</h3>
      <div>Component Re Render </div>
    </div>
  );
});

const ReactCompilerExample = () => {
  return (
    <>
      <Title>React Compiler Example</Title>
      <OuterComponent />
    </>
  );
};

export default ReactCompilerExample;
