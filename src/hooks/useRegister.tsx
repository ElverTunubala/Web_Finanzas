import { useState } from "react";
import axios, { AxiosError } from "axios";

interface RegisterResponse {
  success: boolean;
  message?: string;
}

const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (
    username: string,
    email: string,
    password: string,
    currency: string
  ): Promise<RegisterResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        username,
        email,
        password,
        currency,
      });

      return { success: true, message: "Registro exitoso" };
    } catch (err: unknown) {
      
      if (axios.isAxiosError(err)) {
        const errorMessage = err.response?.data?.message || err.message || "Error desconocido";
        setError(errorMessage);
        return { success: false, message: errorMessage };
      } else {
        
        const genericError = "Error desconocido";
        setError(genericError);
        return { success: false, message: genericError };
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};

export default useRegister;
