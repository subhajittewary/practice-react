import axios from "axios";

export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";

export const fetchTodosSuccess = () => async (dispatch) => {
    const url = "https://jsonplaceholder.typicode.com/todos/";
    try {
      const response = await axios.get(url);
      console.log("response.data-------------->", response.data);
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data }); // Dispatch the action with fetched data
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
};
