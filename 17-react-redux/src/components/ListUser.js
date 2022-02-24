import { useEffect } from "react";
import { getUserActions } from "../redux/actions/users.actions";
import { useDispatch, useSelector } from "react-redux";

function ListUser(props) {
  // mengirimkan request pengambilan data
  const dispatch = useDispatch();

  // menerima data
  const user = useSelector((state) => state.getUserReducers.dataaaa);
  console.log(user);

  useEffect(() => {
    dispatch(getUserActions());
  }, [dispatch]);

  return (
    <div>
      <h1>ListUser Component</h1>
      {user.map((item, index) => (
        <div key={index}>
          <h3>Name: {item.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default ListUser;
