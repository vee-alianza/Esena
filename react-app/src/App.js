import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import CreateProjectModal from "./components/CreateProjectForm";
import CreateTaskModal from "./components/CreateTaskForm";
import MyTasks from "./components/MyTasks";
import ProjectTasksInProgress from "./components/ProjectTasksInProgress";
import ProjectTasksCompleted from "./components/ProjectTasksCompleted";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import { authenticate } from "./store/session";
import { getProject, setProjects } from "./store/projects";
import { setTasks } from "./store/tasks";
import { setAllUsers, setTeammates } from "./store/teammates";
import SingleProjectPreview from "./components/SingleProjectPreview";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session.user);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      if (session) {
        const res = await fetch(`/api/users/${session.id}`);
        if (res.ok) {
          const data = await res.json();
          dispatch(setProjects(data.projects));
          dispatch(setTasks(data.tasks));
          dispatch(setTeammates(data.teammates));
        }
      }
      setLoaded(true);
    })();
  }, [dispatch, session]);

  useEffect(() => {
    (async () => {
      if (session) {
        const res = await fetch(`/api/users`);
        if (res.ok) {
          const data = await res.json();
          dispatch(setAllUsers(data.users));
        }
      }
    })();
  }, [dispatch, session]);

  if (!loaded) {
    return null;
  }

  console.log(getProject)
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
        {/* testing */}
        <Route path="/create-project" exact={true}>
          <CreateProjectModal />
        </Route>
        <Route path="/banana">
          <SingleProjectPreview />
        </Route>
        {/* <Route path="/create-task" exact={true}>
          <CreateTaskModal />
        </Route> */}
        <Route path="/my-tasks" exact={true}>
          <MyTasks />
        </Route>
        <Route path="/projects/:projectId/tasks" exact={true}>
          <ProjectTasksInProgress />
          <ProjectTasksCompleted />
        </Route>
        {/* testing */}
        <Route path="/home-page">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
