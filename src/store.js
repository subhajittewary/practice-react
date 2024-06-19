import { combineReducers, createStore } from "redux";
const initialState = {
    todos: []
  };
const todosReducer = (state=initialState, action) => {

    switch (action.type) {
        case "FETCH_SUCCESS": {
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

 const store = createStore(rootReducer)
 export default store;