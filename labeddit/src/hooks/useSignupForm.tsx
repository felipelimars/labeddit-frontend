import { useContext } from "react";
import { SignupFormContext } from "../contexts/SignupFormContext"


export const useSignupForm = () => {
    const context = useContext(SignupFormContext);
    if (!context) {
      throw new Error("useSignupForm must be used within a SignupFormProvider");
    }
    return context;
  };
  