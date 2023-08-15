import React, { useEffect, useState } from 'react';
import Task from './Task';
import { useGetTasksQuery } from '../features/Tasks/tasksApi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TasksLists = () => {
    const [tasksData, setTasksData] = useState([]);
    const { projectChecked } = useSelector(state => state.projectChecked);
    const { data, isLoading, isError } = useGetTasksQuery();
    const { search } = useSelector(state => state.searchTask);

    useEffect(() => {
        setTasksData(data);
    }, [data]);

    useEffect(() => {
        if (search) {
            const datas = data.filter(searchTask => searchTask.taskName.toLowerCase().includes(search.toLowerCase()));
            setTasksData(datas);
        } else {
            setTasksData(data);
        }
    }, [search, data]);

    let content = null;
    if (isLoading) {
        content = <div>Loading....</div>
    }
    if (!isLoading && isError) {
        content = <div>error....</div>
    }
    if (!isLoading && !isError && data?.length === 0) {
        content = <div>data not found...</div>
    }
    if (!isLoading && !isError && data?.length > 0) {
        const projectTask = tasksData.filter(project => {
            const projectCheckFind = projectChecked.find(datacheck => datacheck.name === project.project.projectName && datacheck.check === true);
            if (projectCheckFind) {
                return true;
            } else {
                return false;
            }

        })

        // console.log("project task-->", projectTask)
        content = projectTask.map(task => <Task key={task.id} task={task} />)
    }


    return (
        <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
            <div className="justify-between mb-10 space-y-2 md:flex md:space-y-0">
                <Link to="/addnewtask" className="lws-addnew group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="w-6 h-6 group-hover:text-indigo-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                    <span className="group-hover:text-indigo-500">Add New</span>
                </Link>
            </div>

            <div className="lws-task-list">
                {content}
            </div>
        </main>
    );
};

export default TasksLists;