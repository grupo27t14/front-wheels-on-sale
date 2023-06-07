import { StyledInput } from "./styles";
import { iInputProps } from "./props";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ type, label, id, placeholder, value, pattern, ...rest }, ref) => {
    return (
      <StyledInput>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...rest}
          ref={ref}
          pattern={pattern}
          defaultValue={value}
        />
      </StyledInput>
    );
  }
);
