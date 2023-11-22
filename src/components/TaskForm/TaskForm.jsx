import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/api";
import { selectItems } from "../../redux/taskSlice";

const TaskForm = () => {
  const [todoItem, setTodoItem] = useState("");
  const [priorityNumber, setPriorityNumber] = useState(null);
  const items = useSelector(selectItems);

  const dispatch = useDispatch();
  const onFormSubmit = (e) => {
    e.preventDefault();

    const isDuplicate = items.some(
      (item) =>
        item.todoItem === todoItem && item.priorityNumber === priorityNumber
    );

    if (!isDuplicate) {
      dispatch(addTask({ todoItem, priorityNumber }));
      setTodoItem("");
      setPriorityNumber("");
      const form = e.target;
      form.reset();
    } else {
      alert("This task already exists!");
    }
  };
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        className="todo_text"
        type="text"
        name="text"
        placeholder="Type your task"
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <input
        className="todo_priority"
        type="number"
        name="number"
        placeholder="Type your priority"
        onChange={(e) => setPriorityNumber(e.target.value)}
      />
      <button type="submit" className="form_button"></button>
    </form>
  );
};

export default TaskForm;
