import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  const [employees, setEmployees] = useState([]);

  const handleCreateCard = (employee) => {
    console.log(employee)
    setEmployees([...employees, employee]);
  }

  return (
    <div className="App">
      <Header />
      <Form handleCreateCard={employee => handleCreateCard(employee)} />
    </div>
  );
}

export default App;
