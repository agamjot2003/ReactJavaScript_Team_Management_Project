import TeamMemberCard from './TeamMemberCard';

const TeamMembers = ({ employees, handleEmployeeCardClicks, selectedTeam }) => {
  return (
    employees.map((employee) => (
      <TeamMemberCard employee={employee} handleEmployeeCardClicks={handleEmployeeCardClicks} selectedTeam={selectedTeam} />
    ))
  )
}
export default TeamMembers;