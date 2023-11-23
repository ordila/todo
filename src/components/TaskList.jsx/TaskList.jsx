import React, { useEffect } from "react";
import { selectItems } from "../../redux/select";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getTask } from "../../redux/api";
import { IoMdClose } from "react-icons/io";
import css from "./TaskList.module.css";
const TaskList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);
  const list = useSelector(selectItems);

  return (
    <ul className={css.todo_list}>
      {list.map((item) => {
        const onButtonDeleteClick = (e) => {
          dispatch(deleteTask(item.id));
        };
        return (
          <div className={css.wrapper} key={item.id}>
            <li className={css.list_item} key={item.id}>
              <span className={css.priority}>{item.priorityNumber}</span>
              <span className={css.todo_text}>{item.todoItem}</span>
              <button
                className={css.close_button}
                onClick={onButtonDeleteClick}
              >
                <IoMdClose className={css.close_button_icon} />
              </button>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default TaskList;
