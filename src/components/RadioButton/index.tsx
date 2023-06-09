import { forwardRef } from "react";
import { iRadioButtonDivProps } from "./props";

export const RadioButton = forwardRef<HTMLInputElement, iRadioButtonDivProps>(
  ({ label, id, value, defaultChecked, ...rest }, ref) => {
    return (
      <>
        <input
          type="radio"
          id={id}
          ref={ref}
          value={value}
          defaultChecked={defaultChecked}
          {...rest}
        />
        <label htmlFor={id}>{label}</label>
      </>
    );
  }
);
