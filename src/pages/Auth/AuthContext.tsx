import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string | null;
  setUserId: React.Dispatch<React.SetStateAction<string | null>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
   
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");

    if (storedToken && storedUserId) {
      setIsLoggedIn(true);
      setToken(storedToken);
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
   
    if (isLoggedIn && token && userId) {
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
    } else {
      
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    }
  }, [isLoggedIn, token, userId]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userId, token, setToken, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
