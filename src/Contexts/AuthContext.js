import React, { useContext, useState } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState('Reilly');
  const isSignedIn = true;
  const values = { user, isSignedIn };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
