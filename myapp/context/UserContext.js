import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [loginuser, setLoginUser] = useState(null);

  return (
    <UserContext.Provider value={{ loginuser, setLoginUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}