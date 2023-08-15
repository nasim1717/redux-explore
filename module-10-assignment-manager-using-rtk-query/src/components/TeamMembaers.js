import React from 'react';
import TeamMember from './TeamMember';
import { useGetTeamMembersQuery } from '../features/TeamMembers/teamMembersApi';


const TeamMembaers = () => {
    const { data, isLoading, isError, error } = useGetTeamMembersQuery() || {};

    let content = null;
    if (isLoading) {
        content = <div>Loading....</div>
    }
    if (!isLoading && isError) {
        content = <div>error.....</div>
    }
    if (!isLoading && !isError && data?.length === 0) {
        content = <div>Data not found!</div>
    }
    if (!isLoading && !isError && data?.length > 0) {
        content = data.map(member => <TeamMember key={member.id} members={member}></TeamMember>)
    }

    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold">Team Members</h3>
            <div className="mt-3 space-y-4">
                {content}
            </div>
        </div>
    );
};

export default TeamMembaers;