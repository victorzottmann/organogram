import styled from "styled-components";

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
`;

const Input = styled.input`
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  font-size: 16px;
  width: 100%;
  padding: 24px;
`;

const TextInput = ({ label, id, required, placeholder, value, onChange }) => {
  const newPlaceholder = `${placeholder}...`;

  return (
    <TextInputContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input 
        id={id}
        required={required} 
        placeholder={newPlaceholder}
        value={value}
        onChange={onChange}
        autoComplete="on"
      />
    </TextInputContainer>
  );
}

export default TextInput;
