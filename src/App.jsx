import Header from "./components/Header";
import TextInput from "./components/TextInput";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TextInput label="Name" placeholder="Enter your name" />
      <TextInput label="Role" placeholder="Enter your role" />
      <TextInput label="Profile Picture" placeholder="Insert a link to your profile picture" />
      <TextInput label="Department" placeholder="Enter the name of your department" />
    </div>
  );
}

export default App;
