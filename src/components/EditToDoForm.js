import React, { useState } from "react";

const EditToDoForm = ({ editToDo, task }) => {
  const [value, setValue] = useState(task.task);

  const submitHandler = (e) => {
    e.preventDefault();
    editToDo(value, task.id);
  };


  return (
    <div className="w-[426px] ml-9 mb-3 h-11 rounded-lg bg-main border-[2px] border-black"> 
    <form
      onSubmit={submitHandler}
    >
      <input
        className="pl-3 mt-[5px] ml-1 h-8 w-[300px] rounded-lg border-[2px] border-black"
        type="text"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button
        type="submit"
        className="bg-main text-white font-semibold border-[2px] border-black w-28 h-8 rounded-lg ml-1"
      >
        Update Task
      </button>
    </form>
    </div>
  );
};

export default EditToDoForm;
