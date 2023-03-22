import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuid } from "uuid";
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";
import Child from "./Child";
uuid();

export const ToDoWrapper = () => {
  const [toDos, setToDos] = useState([]);

  const [child, setChild] = useState([]);

  const addToDo = (value) => {
    if (value) {
      setToDos([
        ...toDos,
        {
          id: uuid(),
          task: value,
          isEditing: false,
        }
      ]);
      console.log(toDos);
    }
  };


  const deleteToDo = (id) => {
    setToDos(toDos.filter(todo => todo.id !== id))
  }


  const editToDo = (id) => {
    setToDos(toDos.map(todo => todo.id === id ? {
      ...todo, isEditing: true                                //or isEditing : !todo.isEditing
    } : todo))
  }

  const editTask = (editedValue, id) => {
    setToDos(toDos.map(todo => todo.id === id ? {
      ...todo, task : editedValue, isEditing: false          //or isEditing : !todo.isEditing
    } : todo))
  }

  // const childData = (value) => {
  //   setChild([
  //     ...child,
  //     {
  //       value : value
  //     }
  //   ]);
  // }


  return (
    <div className="bg-wrapper h-auto mt-28 w-[500px] ml-[500px] rounded-lg pt-10 flex flex-col border-[2px] border-black">
      <h1 className="text-3xl font-bold ml-32 mb-10 text-black">Get Things Done</h1>
      <ToDoForm addToDo={addToDo} />  
      {/* {addToDo} in bracket is from this component and addToDo= is a prop called in child component */}

      {
        toDos.map((todo, index) => (
          todo.isEditing ? (
            <EditToDoForm editToDo={editTask} task={todo}/>
          ) :

          (<ToDo task={todo} key={index} deleteToDo={deleteToDo} editToDo={editToDo}/>)
        ))
      }

      {/* <Child childToDo={childData}/>

      <div className="text-center">
        {
          child.map(d => (<h1>Data from child to Parent is: {d.value}</h1>))
        }
      </div> */}
    </div>
  );
};
