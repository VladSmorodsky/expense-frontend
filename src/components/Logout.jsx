import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router";

export const Logout = () => {
  const {removeUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutUser = () => {
    removeUser();
    navigate('/login');
  }

  return (
    <button onClick={logoutUser}>
      Logout
    </button>
  );
}