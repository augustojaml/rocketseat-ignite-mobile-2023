import { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonTouchableProps extends TouchableOpacityProps {
  children: ReactNode;
}

export function ButtonTouchable({ children, ...rest }: ButtonTouchableProps) {
  return (
    <>
      <TouchableOpacity activeOpacity={0.6} {...rest}>
        {children}
      </TouchableOpacity>
    </>
  );
}
