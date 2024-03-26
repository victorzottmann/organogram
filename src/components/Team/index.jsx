import styled from "styled-components";

const TeamSection = styled.section`
  text-align: center;
  padding: 32px;
  background-color: #D9F7E9;
`;

const TeamName = styled.h3`
  display: inline-block;
  padding-bottom: 8px;
  font-size: 24px;
  border-bottom: 4px solid #57C278;
`;

const Team = ({ name }) => {
  return (
    <TeamSection>
      <TeamName>{name}</TeamName>
      <div>Card</div>
    </TeamSection>
  );
}

export default Team;
