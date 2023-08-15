import React from 'react';
import ProjectsList from '../components/ProjectsList';
import TeamMembaers from '../components/TeamMembaers';
import TasksLists from '../components/TasksLists';

const Home = () => {
    return (
        <div className="container relative">
            <div className="sidebar">
                {/* <!-- Projects List --> */}
                <ProjectsList></ProjectsList>
                {/* <!-- Team Members --> */}
                <TeamMembaers></TeamMembaers>
            </div>

            <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
                <TasksLists></TasksLists>
            </div>
        </div>
    );
};

export default Home;