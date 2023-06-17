import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const filterByStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "Completed":
        return todo.completed;
      case "Incompleted":
        return !todo.completed;
      default:
        return true;
    }
  };

  const filteByColors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filteByColors)
        .map((todo) => (
          <Todo todo={todo} key={todo.id}></Todo>
        ))}
    </div>
  );
};

export default TodoList;
