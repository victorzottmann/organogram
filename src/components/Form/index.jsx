import { useState } from "react";
import styled from "styled-components";

import TextInput from "../TextInput";
import List from "../List";
import Button from "../Button";
import { teams } from "../../data/index.js"

const FormSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 80px auto;
`;

const FormContainer = styled.form`
  background-color: #f2f2f2;
  max-width: 100%;
  padding: 36px 64px;
  border-radius: 20px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.08);
`;

const Form = ({ handleCreateCard }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [picture, setPicture] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateCard({
      name,
      role,
      picture, 
      team
    });
  }

  return (
    <FormSection>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Fill in the fields to create an employee card</h2>
        <TextInput 
          label="Name"
          id="name"
          required={true} 
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput 
          label="Role"
          id="role" 
          required={true} 
          placeholder="Enter your role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <TextInput 
          label="Profile Picture" 
          id="picture"
          required={true} 
          placeholder="Insert a link to your profile picture"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />
        <List 
          label="Select a Team"
          id="team"
          required={true}
          teams={teams} 
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        />
        <Button>Create Card</Button>
      </FormContainer>
    </FormSection>
  );
}

export default Form;
