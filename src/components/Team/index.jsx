import styled from "styled-components";

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

const Team = ({ name, colors }) => {
  return (
    <TeamSection $colors={colors}>
      <TeamName $colors={colors}>{name}</TeamName>
      <div>Card</div>
    </TeamSection>
  );
}

export default Team;
