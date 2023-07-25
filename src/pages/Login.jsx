import {useState} from "react";
import {login} from "../api/auth";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {useNavigate} from "react-router";

export function Login() {
  const [value, setValue] = useLocalStorage('token');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await login(username, password);
      setValue(data.access_token);
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