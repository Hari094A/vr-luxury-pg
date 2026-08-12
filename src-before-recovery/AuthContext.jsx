import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("vr-auth")) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem("vr-auth", JSON.stringify(user));
    else localStorage.removeItem("vr-auth");
  }, [user]);

  const login = (email, password, role) => {
    if (role === "owner") {
      if (
        email.trim().toLowerCase() === "owner@vrluxurypg.com" &&
        password === "VR@12345"
      ) {
        const owner = {
          name: "VR Luxury PG Owner",
          email,
          role: "owner"
        };
        setUser(owner);
        return { success: true };
      }

      return {
        success: false,
        message: "Invalid owner email or password."
      };
    }

    if (!email || !password) {
      return {
        success: false,
        message: "Please enter email and password."
      };
    }

    const customer = {
      name: email.split("@")[0].split(/[\s._-]+/)[0].replace(/^./, c => c.toUpperCase()),
      email,
      role: "customer"
    };

    setUser(customer);
    return { success: true };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}


