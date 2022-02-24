import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function UserListHooks() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>userlist hooks</h1>
      <p>name: {user.name}</p>
      <p>bootcamp: {user.bootcamp}</p>
    </div>
  );
}

export default UserListHooks;

// buat context untuk nama dan domisili kalian
