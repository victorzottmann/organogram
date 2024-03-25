import styled from "styled-components";
import TextInput from "../TextInput";
import List from "../List";

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

const Form = () => {
  const departments = [
    "Programming",
    "Front-End",
    "Data Science",
    "UI / UX Design",
    "Mobile",
    "Innovation and Management",
  ];

  return (
    <FormSection>
      <FormContainer>
        <h2>Fill in the fields to create an employee card</h2>
        <TextInput label="Name" placeholder="Enter your name" />
        <TextInput label="Role" placeholder="Enter your role" />
        <TextInput label="Profile Picture" placeholder="Insert a link to your profile picture" />
        <List items={departments} />
      </FormContainer>
    </FormSection>
  );
}

export default Form;
