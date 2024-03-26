import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Select = styled.select`
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  font-size: 16px;
  width: 100%;
  padding: 24px;
`;

const List = ({ label, teams, required, onChange }) => {
  return (
    <ListContainer>
      <Label>{label}</Label>
      <Select 
        required={required} 
        onChange={onChange}
      >
        {teams.map(team => <option key={team.name}>{team.name}</option>)}
      </Select>
    </ListContainer>
  )
}

export default List;
