import {useAuth} from "../context/AuthContext";

export function Expenses() {
  const {user} = useAuth();
  return (
    <div>
      {user && (<h2>{user.name} Expenses</h2>)}
    </div>
  );
}