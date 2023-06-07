import { StyledForm } from "./styles";
import { iFormProps } from "./props";

export function Form({ children, title, onSubmit }: iFormProps) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <h3>{title}</h3>
      {children}
    </StyledForm>
  );
}
