import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { projectCheck } from '../features/Projects/ProjectSlice';

const ProjectList = ({ project }) => {
    const [statusChecked, setStatusChecked] = useState(true);
    const dispatch = useDispatch();
    const { projectName, colorClass } = project;

    const handleChecked = () => {
        dispatch(projectCheck({ name: projectName, check: !statusChecked }))
        setStatusChecked(!statusChecked);
    }

    return (
        <div className="checkbox-container">
            <input onChange={handleChecked} type="checkbox" className={`${colorClass}`} checked={statusChecked} />
            <p className="label">{projectName}</p>
        </div>
    );
};

export default ProjectList;