import React, { useEffect, useState } from 'react';
import { useGetTeamMembersQuery } from '../features/TeamMembers/teamMembersApi';
import { useGetProjectQuery } from '../features/Projects/ProjectsApi';
import { useAddTaskMutation } from '../features/Tasks/tasksApi';
import { useNavigate } from 'react-router-dom';

const AddNew = () => {
    const [selectJobTeam, setSelectJobTeam] = useState({
        teamMember: {},
        project: {},
    })
    const { data: teamsData, isLoading: teamLoading, isError: teamError } = useGetTeamMembersQuery();
    const { data: projects, isLoading: projectLoading, isError: projectError } = useGetProjectQuery();
    const [addTask, { isSuccess, isError }] = useAddTaskMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            navigate("/");
        }
    }, [isSuccess, navigate]);

    let teamContent = null;
    if (teamLoading) {
        teamContent = <>Loading...</>;
    }
    if (!teamLoading && teamError) {
        teamContent = <>Error...</>
    }
    if (!teamLoading && !teamError && teamsData?.length === 0) {
        teamContent = <>data not found!</>
    }
    if (!teamLoading && !teamError && teamsData?.length > 0) {
        teamContent = teamsData.map(team => <option key={team.id} value={team.id}>{team.name}</option>)
    }

    let projectContent = null;
    if (projectLoading) {
        projectContent = <>Loading...</>;
    }
    if (!projectLoading && projectError) {
        projectContent = <>Error...</>
    }
    if (!projectLoading && !projectError && projects?.length === 0) {
        projectContent = <>data not found!</>
    }
    if (!projectLoading && !projectError && projects?.length > 0) {
        projectContent = projects.map(proj => <option key={proj.id} value={proj.id}>{proj.projectName}</option>)
    }

    const handleTeamMember = (event) => {
        const value = event.target.value;
        const teamMember = teamsData.find(team => team.id === Number(value));
        setSelectJobTeam({ ...selectJobTeam, teamMember })
    }

    const handleProject = (event) => {
        // console.log(event.target.value);
        const value = event.target.value;
        const project = projects.find(pro => pro.id === Number(value));
        setSelectJobTeam({ ...selectJobTeam, project });
    }
    console.log("select job tem-->", selectJobTeam);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const taskName = form.taskName.value;
        const deadline = form.deadline.value;
        // console.log({ taskName, deadline, teamMember: selectJobTeam.teamMember, project: selectJobTeam.project });
        const tasks = { taskName, deadline, teamMember: selectJobTeam.teamMember, project: selectJobTeam.project };
        addTask(tasks);

    }

    return <div className="container relative">
        <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
            <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
                Create Task for Your Team
            </h1>

            <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="fieldContainer">
                        <label htmlFor="lws-taskName">Task Name</label>
                        <input
                            type="text"
                            name="taskName"
                            id="lws-taskName"
                            required
                            placeholder="Implement RTK Query"
                        />
                    </div>

                    <div className="fieldContainer">
                        <label>Assign To</label>
                        <select onChange={handleTeamMember} name="teamMember" id="lws-teamMember" required>
                            <option value="" hidden >Select Job</option>
                            {teamContent}
                        </select>
                    </div>
                    <div className="fieldContainer">
                        <label htmlFor="lws-projectName">Project Name</label>
                        <select onChange={handleProject} id="lws-projectName" name="projectName" required>
                            <option value="" hidden >Select Project</option>
                            {projectContent}
                        </select>
                    </div>

                    <div className="fieldContainer">
                        <label htmlFor="lws-deadline">Deadline</label>
                        <input type="date" name="deadline" id="lws-deadline" required />
                    </div>

                    <div className="text-right">
                        <button type="submit" className="lws-submit">Save</button>
                    </div>
                </form>
                {isError && <div style={{ color: "red" }}>Error..</div>}
                {isSuccess && <div style={{ color: "green" }}>Successfuly</div>}
            </div>
        </main>
    </div>
};

export default AddNew;