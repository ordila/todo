import React, { useEffect } from "react";
import { selectItems } from "../../redux/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getTask } from "../../redux/api";

const TaskList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);
  const list = useSelector(selectItems);

  return (
    <ul className="todo_list">
      {list.map((item) => {
        const onButtonDeleteClick = (e) => {
          console.log("item.id :>> ", item.id);
          dispatch(deleteTask(item.id));
        };
        return (
          <li key={item.id}>
            <span className="priority">{item.priorityNumber}</span>
            <span className="todo_text">{item.todoItem}</span>
            <button onClick={onButtonDeleteClick}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
