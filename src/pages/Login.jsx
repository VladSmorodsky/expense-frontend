import {useState} from "react";
import {login as loginUser} from "../api/auth";
import {useNavigate} from "react-router";
import {useAuth} from "../context/AuthContext";

export function Login() {
  const {addUser} = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await loginUser(username, password);
      const user = {
        id: data.user.id,
        email: data.user.email,
        name: data.user.name,
        token: data.access_token
      };
      addUser(user);
      navigate('/');
    } catch (error) {
      console.log('[error]', error);
    }
  }

  return (
    <div className={'content'}>
      <form action="#" onSubmit={(event) => handleSubmit(event)}>
        <div className={'input-container'}>
          <input type="text"
                 name={'username'}
                 defaultValue={''}
                 onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className={'input-container'}>
          <input type="password"
                 name={'password'}
                 defaultValue={''}
                 onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button>Enter</button>
        </div>
      </form>
    </div>
  );
}