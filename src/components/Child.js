import React, { useState } from "react";

const Child = ({ childToDo }) => {
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    childToDo(value);
    setValue("");
  };

  return (
    <div className="w-96 ml-14 mb-10"> 
    <form
      onSubmit={submitHandler}
    >
      <input
        className="pl-3 h-10 w-[300px] rounded-lg border-[2px] border-black"
        type="text"
        value={value}
        placeholder="Child Data To be Entered?"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button
        type="submit"
        className="bg-main w-20 h-10 rounded-lg ml-1 text-white font-semibold border-[2px] border-black"
      >
        ShowData
      </button>
    </form>
    </div>
  );
};

export default Child;
