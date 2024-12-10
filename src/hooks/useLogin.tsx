import { useState } from "react";
import axios from "axios";

interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
  userId?: string;
}

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string): Promise<LoginResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      const { token, userId } = response.data;
      return {
        success: true,
        message: "Inicio de sesión exitoso",
        token,
        userId,
      };
    } catch (err: unknown) {
        
      if (axios.isAxiosError(err)) {
        const errorMessage = err.response?.data?.message || err.message || "Error desconocido";
        setError(errorMessage);
        return { success: false, message: errorMessage };
      } else {
        setError("Error desconocido");
        return { success: false, message: "Error desconocido" };
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};

export default useLogin;
