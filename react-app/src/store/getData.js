import { setAllUsers, setTeammates } from "./teammates";
import { setProjects } from "./projects";
import { setTasks } from "./tasks";
import { setComments } from "./comments";

export const getData = (sessionId) => async (dispatch) => {
    const res = await fetch(`/api/users/${sessionId}`);
    const userFetchRes = await fetch('/api/users');

    if (res.ok && userFetchRes.ok) {
        const data = await res.json();
        const allUserData = await userFetchRes.json();

        dispatch(setAllUsers(allUserData.users));
        dispatch(setProjects(data.projects));
        dispatch(setTasks(data.tasks));
        dispatch(setTeammates(data.teammates));
        dispatch(setComments(data.comments));
    }
}
