import { UserContext } from "../context/UserContext";

function UserList() {
  return (
    <UserContext.Consumer>
      {(userContext) => {
        const { user } = userContext;
        return (
          <div>
            <h1>userlist</h1>
            <p>name: {user.name}</p>
            <p>bootcamp: {user.bootcamp}</p>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

export default UserList;
