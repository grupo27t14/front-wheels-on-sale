import { StyledForm } from "./styles";
import { iFormProps } from "./props";

export function Form({ children, title, onSubmit, margin, padding, width }: iFormProps) {
  return (
    <StyledForm onSubmit={onSubmit} margin={margin} padding={padding} width={width}>
      <h3>{title}</h3>
      {children}
    </StyledForm>
  );
}
