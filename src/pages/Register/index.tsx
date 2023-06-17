import { RegisterStyled } from "./styles";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { StyledButton } from "../../styles/button";
import { ErrorMessage } from "../../components/Form/styles";
import { useCep } from "./useCep";
import { useUsers } from "../../hooks/useUser";
import { registerSchemaRequest, tRegister } from "./schemas";
import { RadioButton } from "../../components/RadioButton";
import { RadioButtonDivStyles } from "../../components/RadioButton/styles";
import { LoadingRing } from "../../styles/LoadingRing";
import { theme } from "../../styles/theme";

export const Register = () => {
  const { errors, handleSubmit, register } = useCep();

  const { userRegister, reqLoading } = useUsers();

  const handleRegisterSubmit = (data: tRegister) => {
    const parsedData = registerSchemaRequest.parse(data);
    userRegister(parsedData);
  };

  return (
    <RegisterStyled>
      <Form title="Registro" onSubmit={handleSubmit(handleRegisterSubmit)}>
        <h4>Informações pessoais</h4>
        <Input
          id="name"
          label="Nome"
          placeholder="Ex: Samuel Leão"
          type="text"
          className={errors.name ? "err" : ""}
          {...register("name")}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        <Input
          id="email"
          label="Email"
          placeholder="Ex: samuel@kenzie.com.br"
          type="email"
          className={errors.email ? "err" : ""}
          {...register("email")}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Input
          id="cpf"
          label="CPF"
          placeholder="000.000.000-00"
          type="text"
          className={errors.personalInformation?.cpf ? "err" : ""}
          {...register("personalInformation.cpf")}
        />
        {errors.personalInformation?.cpf && (
          <ErrorMessage>{errors.personalInformation.cpf.message}</ErrorMessage>
        )}
        <Input
          id="phone"
          label="Celular"
          placeholder="(DDD) 90000-0000"
          type="text"
          className={errors.personalInformation?.phone ? "err" : ""}
          {...register("personalInformation.phone")}
        />
        {errors.personalInformation?.phone && (
          <ErrorMessage>
            {errors.personalInformation.phone.message}
          </ErrorMessage>
        )}
        <Input
          id="birth_date"
          label="Data de nascimento"
          placeholder="00/00/00"
          type="date"
          pattern="\d{4}-\d{2}-\d{2}"
          className={errors.personalInformation?.birth_date ? "err" : ""}
          {...register("personalInformation.birth_date")}
        />
        {errors.personalInformation?.birth_date && (
          <ErrorMessage>
            {errors.personalInformation?.birth_date.message}
          </ErrorMessage>
        )}
        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          placeholder="Digitar descrição"
          className={errors.personalInformation?.description ? "err" : ""}
          {...register("personalInformation.description")}
        />
        <h4>Informações de endereço</h4>
        <Input
          id="cep"
          label="CEP"
          placeholder="000000.000"
          type="text"
          maxLength={9}
          className={errors.addressInformation?.cep ? "err" : ""}
          {...register("addressInformation.cep")}
        />
        {errors.addressInformation?.cep && (
          <ErrorMessage>{errors.addressInformation?.cep.message}</ErrorMessage>
        )}
        <div>
          <Input
            id="state"
            label="Estado"
            placeholder="Digitar Estado"
            type="text"
            className={errors.addressInformation?.state ? "err" : ""}
            {...register("addressInformation.state")}
          />
          <Input
            id="city"
            label="Cidade"
            placeholder="Digitar cidade"
            type="text"
            className={errors.addressInformation?.city ? "err" : ""}
            {...register("addressInformation.city")}
          />
        </div>
        <Input
          id="street"
          label="Rua"
          placeholder="Digitar rua"
          type="text"
          className={errors.addressInformation?.city ? "err" : ""}
          {...register("addressInformation.street")}
        />
        {errors.addressInformation?.street && (
          <ErrorMessage>
            {errors.addressInformation?.street.message}
          </ErrorMessage>
        )}
        <div>
          <Input
            id="number"
            label="Número"
            placeholder="Digitar número"
            type="text"
            className={errors.addressInformation?.number ? "err" : ""}
            {...register("addressInformation.number")}
          />
          <Input
            id="complement"
            label="Complemento"
            placeholder="Ex: apart 307"
            type="text"
            className={errors.addressInformation?.complement ? "err" : ""}
            {...register("addressInformation.complement")}
          />
        </div>
        <h4>Tipo de conta</h4>
        <RadioButtonDivStyles>
          <RadioButton
            id="buyer"
            label="Comprador"
            value={0}
            defaultChecked={true}
            {...register("is_seller")}
          />
          <RadioButton
            id="seller"
            label="Anunciante"
            value={1}
            {...register("is_seller")}
          />
        </RadioButtonDivStyles>
        <Input
          id="password"
          label="Senha"
          placeholder="Digitar senha"
          type="password"
          className={errors.password ? "err" : ""}
          {...register("password")}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
        <Input
          id="confirm"
          label="Confirmar Senha"
          placeholder="Digitar senha"
          type="password"
          className={errors.confirm ? "err" : ""}
          {...register("confirm")}
        />
        {errors.confirm && (
          <ErrorMessage>{errors.confirm.message}</ErrorMessage>
        )}
        <StyledButton buttonstyle="brand1" type="submit" disabled={reqLoading}>
          {reqLoading ? (
            <LoadingRing color={theme.colors.whiteFixed} />
          ) : (
            "Finalizar Cadastro"
          )}
        </StyledButton>
      </Form>
    </RegisterStyled>
  );
};
