import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('../../db.json')
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const login = (username, password, role) => {
    const foundUser = users.find(
      user => user.username === username && user.password === password && user.role === role
    );
    if (foundUser) {
      setUser({ username, role, token: foundUser.token });
      localStorage.setItem('user', JSON.stringify({ username, role, token: foundUser.token }));
    } else {
      console.error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};