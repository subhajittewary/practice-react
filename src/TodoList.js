import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchTodosSuccess } from './actions.js';

const TodoList = ({ todoList, fetchTodosSuccess }) => {

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
      fetchTodosSuccess(response.data); // Dispatch the action with fetched data
    };

    fetchData();
  }, [fetchTodosSuccess]);

  return (
    <>
      {todoList && todoList.length > 0 ? todoList.map((todo) => (
        <h4 key={todo.id}>{todo.title}</h4>
      )) : "Loading..."}
    </>
  );
};

const mapStateToProps = (state) => (
   { todoList: state.todos.todos}
)

const mapDispatchToProps = (dispatch) => ({
  fetchTodosSuccess: (todos) => dispatch(fetchTodosSuccess(todos))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
