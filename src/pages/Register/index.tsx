import { RegisterStyled } from "./styles";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { StyledButton } from "../../styles/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../components/Form/styles";
import { registerSchema, tRegister } from "./schemas";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tRegister>({
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = (data: tRegister) => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
      is_seller: Boolean(Number(data.is_seller)),
    };
    const pi = {
      cpf: data.cpf,
      phone: data.phone,
      birth_date: data.birth_date,
      description: data.description,
    };
    const ai = {
      cep: data.cpf,
      state: data.state,
      city: data.city,
      street: data.street,
      number: data.number,
      complement: data.complement,
    };
    const regData = {
      ...user,
      personalInformation: pi,
      addressInformation: ai,
    };
    console.log(regData);
  };

  return (
    <RegisterStyled>
      <Form title="Registro" onSubmit={handleSubmit(handleRegister)}>
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
          className={errors.cpf ? "err" : ""}
          {...register("cpf")}
        />
        {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
        <Input
          id="phone"
          label="Celular"
          placeholder="(DDD) 90000-0000"
          type="text"
          className={errors.phone ? "err" : ""}
          {...register("phone")}
        />
        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        <Input
          id="birth_date"
          label="Data de nascimento"
          placeholder="00/00/00"
          type="date"
          pattern="\d{4}-\d{2}-\d{2}"
          className={errors.birth_date ? "err" : ""}
          {...register("birth_date")}
        />
        {errors.birth_date && (
          <ErrorMessage>{errors.birth_date.message}</ErrorMessage>
        )}
        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          placeholder="Digitar descrição"
          className={errors.description ? "err" : ""}
          {...register("description")}
        />
        <h4>Informações de endereço</h4>
        <Input
          id="cep"
          label="CEP"
          placeholder="000000.000"
          type="text"
          className={errors.cep ? "err" : ""}
          {...register("cep")}
        />
        {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
        <div>
          <Input
            id="state"
            label="Estado"
            placeholder="Digitar Estado"
            type="text"
            className={errors.state ? "err" : ""}
            {...register("state")}
          />
          <Input
            id="city"
            label="Cidade"
            placeholder="Digitar cidade"
            type="text"
            className={errors.city ? "err" : ""}
            {...register("city")}
          />
        </div>
        <Input
          id="street"
          label="Rua"
          placeholder="Digitar rua"
          type="text"
          className={errors.street ? "err" : ""}
          {...register("street")}
        />
        {errors.street && <ErrorMessage>{errors.street.message}</ErrorMessage>}
        <div>
          <Input
            id="number"
            label="Número"
            placeholder="Digitar número"
            type="text"
            className={errors.number ? "err" : ""}
            {...register("number")}
          />
          <Input
            id="complement"
            label="Complemento"
            placeholder="Ex: apart 307"
            type="text"
            className={errors.complement ? "err" : ""}
            {...register("complement")}
          />
        </div>
        <h4>Tipo de conta</h4>
        <div className="radio">
          <input
            type="radio"
            id="buyer"
            value={0}
            defaultChecked={true}
            {...register("is_seller")}
          />
          <label htmlFor="buyer">Comprador</label>
          <input
            type="radio"
            id="seller"
            value={1}
            {...register("is_seller")}
          />
          <label htmlFor="seller">Anunciante</label>
        </div>
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
        <StyledButton buttonstyle="brand1" type="submit">
          Finalizar Cadastro
        </StyledButton>
      </Form>
    </RegisterStyled>
  );
};
