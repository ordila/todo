import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/api";
import { selectItems } from "../../redux/taskSlice";
import css from "./TaskForm.module.css";
import Notiflix from "notiflix";
const TaskForm = () => {
  const [todoItem, setTodoItem] = useState("");
  const [priorityNumber, setPriorityNumber] = useState(null);
  const items = useSelector(selectItems);

  const dispatch = useDispatch();
  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!todoItem.trim() || !priorityNumber.trim()) {
      Notiflix.Notify.warning("Please fill in all fields!");
      return;
    }

    const isDuplicate = items.some(
      (item) =>
        item.todoItem.toLowerCase() === todoItem.toLowerCase() ||
        item.priorityNumber.toLowerCase() === priorityNumber.toLowerCase()
    );

    if (!isDuplicate) {
      dispatch(addTask({ todoItem, priorityNumber }));
      setTodoItem("");
      setPriorityNumber("");
      const form = e.target;
      form.reset();
    } else {
      Notiflix.Notify.warning("This task already exists!");
    }
  };
  return (
    <>
      <h1 className={css.titleForm}>Shopping List</h1>
      <form className={css.form} onSubmit={onFormSubmit}>
        <input
          className={css.todo_text}
          type="text"
          name="text"
          placeholder="Type your product"
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <input
          className={css.todo_priority}
          type="text"
          name="number"
          placeholder="Priority"
          onChange={(e) => setPriorityNumber(e.target.value)}
        />
        <button type="submit" className={css.form_button}>
          Add
        </button>
      </form>
    </>
  );
};

export default TaskForm;
