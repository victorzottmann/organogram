import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Team from "./components/Team";
import { teams } from "./data/index.js"

const App = () => {
  const [employees, setEmployees] = useState([]);

  const handleCreateCard = (employee) => {
    setEmployees([...employees, employee]);
  }

  return (
    <div className="App">
      <Header />
      <Form teams={teams} handleCreateCard={(employee) => handleCreateCard(employee)} />
      {teams.map(({ name, colors }) => (
        <Team 
          key={name} 
          name={name}
          colors={colors}
        />
      ))}
    </div>
  );
}

export default App;
