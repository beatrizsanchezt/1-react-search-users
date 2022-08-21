import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

const users = ["user1", "user2", "user3"];

function App() {
  return (
    <div>
      <AddUser />
      <UserList users={users} />
    </div>
  );
}

export default App;
