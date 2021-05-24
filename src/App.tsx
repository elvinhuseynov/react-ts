import React from "react";

import TextField from "./components/TextField";
import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <div>
      <TextField
        handleChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;
