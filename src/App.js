import UserForm from "./components/UserForm";
import User from "./components/user";
import { useState } from "react";
function App() {

  const dummy_users = [{ name: "dipu", age: 30 }];
  const [users, setUsers] = useState(dummy_users);


  const getUserDetails = (user) => {
    console.log("lemon");
    setUsers((users)=>[...users, user]);
  };

  

  return (
    <div className="App">
      <UserForm userDetails={getUserDetails} />
     {/* <Invalid/> */}
      {users.map((user) => {
        return <User key={Math.random()} name={user.name} age={user.age} />;
      })}
    </div>
  );
}

export default App;
