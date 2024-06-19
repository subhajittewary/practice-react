import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import TodoList from './TodoList';
import store from './store'; // Assuming this is your Redux store

const mockAxios = new MockAdapter(axios);

describe('TodoList Component', () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  test('renders the todo list after fetching data', async () => {
    const mockTodos = [
      { id: 1, title: 'Todo 1' },
      { id: 2, title: 'Todo 2' },
    ];

    // Mock Axios response
    mockAxios.onGet('https://jsonplaceholder.typicode.com/todos/').reply(200, mockTodos);

    // Wrap state updates in act for async rendering
    await act(async () => {
      render(
        <Provider store={store}>
          <TodoList />
        </Provider>
      );
    });

    // Assert loading state initially (optional)
    // expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Assert that todos are rendered
    expect(await screen.findByText('Todo 1')).toBeInTheDocument();
    expect(await screen.findByText('Todo 2')).toBeInTheDocument();
  });
});
