import React from 'react';
import ProjectList from './ProjectList';
import { useGetProjectQuery } from '../features/Projects/ProjectsApi';

const ProjectsList = () => {
    const { data, isLoading, isError } = useGetProjectQuery();
    let content = null;
    if (isLoading) {
        content = <div>Loading.....</div>
    }
    if (!isLoading && isError) {
        content = <div>error...</div>
    }
    if (!isLoading && !isError && data?.length === 0) {
        content = <div>Project not found!</div>
    }
    if (!isLoading && !isError && data?.length > 0) {
        content = data.map(project => <ProjectList key={project.id} project={project} />)
    }


    return (
        <div>
            <div>
                <h3 className="text-xl font-bold">Projects</h3>
                <div className="mt-3 space-y-4">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default ProjectsList;