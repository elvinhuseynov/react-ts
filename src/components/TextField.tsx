import React, { useRef, useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Text {
  text: string;
}

interface IProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<IProps> = ({ handleChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form>
        <input onChange={handleChange} ref={inputRef} type="text" />
      </form>
    </div>
  );
};

export default TextField;
