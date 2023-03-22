import React from 'react'

const ToDo = ({task, deleteToDo,  editToDo}) => {
  return (
    <div className='w-[28rem] ml-6 mb-3 flex shadow-lg rounded-lg h-11 bg-main border-[2px] border-black'>
        <div className='h-8 mt-[7px] pl-3 w-[300px] ml-1 rounded-lg pt-  text-white'> {task?.task} </div>
        <div>
        <button className='bg-main h-8 w-16 ml-[6px]  mt-[5px] rounded-lg text-white font-semibold border-[2px] border-black' onClick={() =>  editToDo(task.id)}>Edit</button>
        </div>
        <div>
        <button className='bg-main h-8 w-16 ml-1 mt-[5px] rounded-lg text-white font-semibold border-[2px] border-black' onClick={() =>  deleteToDo(task.id)}>Delete</button>
        </div>
    </div>
  )
}

export default ToDo