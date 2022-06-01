import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session";
import projects from "./projects";
import tasks from "./tasks";
import teammates from "./teammates";
import profile from "./profile";
import comments from "./comments";
import singleProject from "./singleProject";

const rootReducer = combineReducers({
  session,
  projects,
  tasks,
  teammates,
  profile,
  comments,
  singleProject
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
