import {createContext, useContext, useEffect, useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const {setItem, getItem, removeItem} = useLocalStorage();

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  const getUser = () => {
    setUser(JSON.parse(getItem('user')));
  }

  const addUser = (userData) => {
    setUser(userData);
    setItem('user', JSON.stringify(userData));
  }

  const removeUser = () => {
    setUser(null);
    removeItem('user');
  }

  return (
    <AuthContext.Provider value={{user, getUser, addUser, removeUser}}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
}
