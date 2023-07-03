import { StyledInput } from "./styled";
import { iInputProps } from "./props";
import { forwardRef } from "react";
import { ErrorMessage } from "../Form/styled";

export const Input = forwardRef<HTMLInputElement, iInputProps>(
  (
    {
      type,
      label,
      id,
      placeholder,
      value,
      pattern,
      errorMessage,
      required,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledInput>
        <label htmlFor={id}>
          {label}
          {required && <i>*</i>}
        </label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...rest}
          ref={ref}
          pattern={pattern}
          defaultValue={value}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </StyledInput>
    );
  }
);
