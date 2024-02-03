import { useContext } from "react";
import { LoginFormContext } from "../contexts/LoginFormContext"

export const useLoginForm = () => {
    const context = useContext(LoginFormContext);
    if (!context) {
      throw new Error("useLoginForm must be used within a LoginFormProvider");
    }
    return context;
  }; 



