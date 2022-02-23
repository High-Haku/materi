import { getUser } from "../redux/actions/users.actions";
import { useDispatch } from "react-redux";

function ListUser() {
  const dispatch = useDispatch();
  return <div>ListUser Component</div>;
}

export default ListUser;
