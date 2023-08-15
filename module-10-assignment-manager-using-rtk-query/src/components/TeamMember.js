import React from 'react';

const TeamMember = ({ members }) => {
    const { name, avatar } = members;

    return (
        <div className="checkbox-container">
            <img src={`.${avatar}`} className="team-avater" alt='' />
            <p className="label">{name}</p>
        </div>
    );
};

export default TeamMember;