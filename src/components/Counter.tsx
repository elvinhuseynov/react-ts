import React from "react";
import { useState } from "react";

interface IProps {
  children: (
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => JSX.Element | null;
}

const Counter: React.FC<IProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  return <div> {children(count, setCount)} </div>;
};

export default Counter;
