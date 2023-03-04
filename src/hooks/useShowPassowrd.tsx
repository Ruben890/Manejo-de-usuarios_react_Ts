import { useState } from "react";
export const useShowPassword = () => {
  const [showPassword, SetShowPassword] = useState(false);
  const password_hidden = () => {
    SetShowPassword(!showPassword);
  };
  return {
    showPassword,
    password_hidden,
  };
};

