import { combineReducers, createStore } from "redux";
import { FETCH_TODOS_SUCCESS } from "./actions";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
const initialState = {
    todos: []
  };
export const todosReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS_SUCCESS: {
            console.log("state update--->", action)
            return {
                ...state,
                todos: action.payload
                }
        }
        default: {
            return state;
        }
    }
}

const rootReducer = combineReducers({todos: todosReducer})

 const store = createStore(rootReducer, applyMiddleware(thunk))
 export default store;