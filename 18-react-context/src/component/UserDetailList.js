import { UserDetailContext } from "../context/UserDetailContext";
import { useContext } from "react";

function UserDetailList() {
  const { user, data } = useContext(UserDetailContext);
  console.log(user, data);
  return (
    <div>
      <h1>userlist hooks</h1>
      <p>name: {user.name}</p>
      <p>bootcamp: {user.domisili}</p>
      {data === undefined
        ? null
        : data.map((item, index) => (
            <div key={index}>
              <h1>{item.name}</h1>
            </div>
          ))}
    </div>
  );
}

export default UserDetailList;

// buat context untuk nama dan domisili kalian
