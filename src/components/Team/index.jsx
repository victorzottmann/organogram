import styled from "styled-components";
import Card from "../Card";

const TeamSection = styled.section`
  text-align: center;
  padding: 32px;
  background-color: ${({ $colors }) => $colors.secondary};
`;

const TeamName = styled.h3`
  display: inline-block;
  padding-bottom: 8px;
  font-size: 24px;
  border-bottom: 4px solid ${({ $colors }) => $colors.primary};
`;

const TeamMembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 32px;
`;

const Team = ({ teamName, employees, colors }) => {
  return (
    employees.length > 0 && (
      <TeamSection $colors={colors}>
        <TeamName $colors={colors}>{teamName}</TeamName>
        <TeamMembersContainer>
          {employees.map(({ name, role, picture }) => (
            <Card
              key={name}
              employeeName={name}
              role={role}
              picture={picture}
              bgColor={colors.primary}
            />
          ))}
        </TeamMembersContainer>
      </TeamSection>
    )
  );
};

export default Team;
