import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodosSuccess } from './actions';

const TodoList = () => {
  const todoList = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchTodosSuccess());
  }, [dispatch]);

  console.log("todoList------------>", todoList);

  return (
    <div>
      {todoList && todoList.length > 0 ? (
        todoList.map((todo) => <h4 key={todo.id}>{todo.title}</h4>)
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default TodoList;
