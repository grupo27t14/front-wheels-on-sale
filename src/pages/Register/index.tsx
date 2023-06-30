import { RegisterStyled } from "./styles";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { StyledButton } from "../../styles/button";
import { useCep } from "./useCep";
import { useUsers } from "../../hooks/useUser";
import { registerSchemaRequest, tRegister } from "./schemas";
import { RadioButton } from "../../components/RadioButton";
import { RadioButtonDivStyles } from "../../components/RadioButton/styles";
import { LoadingRing } from "../../styles/LoadingRing";
import { theme } from "../../styles/theme";
import { useState } from "react";
import ConfirmDeletion from "../../components/Modal/ConfirmDeletion";
import { Modal } from "../../components/Modal";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { errors, handleSubmit, register } = useCep();

  const { userRegister, reqLoading } = useUsers();

  const [successRecordModal, setSuccessRecordModal] = useState(false);

  const navigate = useNavigate();

  const handleRegisterSubmit = (data: tRegister) => {
    const parsedData = registerSchemaRequest.parse(data);
    userRegister(parsedData, successRecordModal, setSuccessRecordModal);
  };

  const handleOpenModal = () => {
    setSuccessRecordModal(!successRecordModal);
  };

  const navigatePageLogin = () => {
    navigate("/login");
  };

  return (
    <RegisterStyled>
      {successRecordModal && (
        <Modal toggleModal={handleOpenModal}>
          <ConfirmDeletion
            title="Sucesso!"
            subtitulo="Sua conta foi criada com sucesso!"
            text="Agora você poderá ver seus negócios crescendo em grande escala"
            text_btn_0="Ir para login"
            onClick0={navigatePageLogin}
            visible="sim"
            color={`${theme.colors.sucess1}`}
            browse="/login"
            handleOpenModal={handleOpenModal}
          />
        </Modal>
      )}

      <Form title="Registro" onSubmit={handleSubmit(handleRegisterSubmit)}>
        <h4>Informações pessoais</h4>
        <Input
          id="name"
          label="Nome"
          placeholder="Ex: Samuel Leão"
          type="text"
          className={errors.name ? "err" : ""}
          errorMessage={errors.name?.message}
          {...register("name")}
          required
        />
        <Input
          id="email"
          label="Email"
          placeholder="Ex: samuel@kenzie.com.br"
          type="email"
          className={errors.email ? "err" : ""}
          errorMessage={errors.email?.message}
          {...register("email")}
          required
        />
        <Input
          id="cpf"
          label="CPF"
          placeholder="000.000.000-00"
          type="text"
          className={errors.personalInformation?.cpf ? "err" : ""}
          errorMessage={errors.personalInformation?.cpf?.message}
          {...register("personalInformation.cpf")}
          required
        />
        <Input
          id="phone"
          label="Celular"
          placeholder="(DDD) 90000-0000"
          type="text"
          className={errors.personalInformation?.phone ? "err" : ""}
          errorMessage={errors.personalInformation?.phone?.message}
          {...register("personalInformation.phone")}
          required
        />
        <Input
          id="birth_date"
          label="Data de nascimento"
          placeholder="00/00/00"
          type="date"
          pattern="\d{4}-\d{2}-\d{2}"
          className={errors.personalInformation?.birth_date ? "err" : ""}
          errorMessage={errors.personalInformation?.birth_date?.message}
          {...register("personalInformation.birth_date")}
          required
        />
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
          errorMessage={errors.addressInformation?.cep?.message}
          {...register("addressInformation.cep")}
          required
        />
        <div>
          <Input
            id="state"
            label="Estado"
            placeholder="Digitar Estado"
            type="text"
            className={errors.addressInformation?.state ? "err" : ""}
            errorMessage={errors.addressInformation?.state?.message}
            {...register("addressInformation.state")}
            required
          />
          <Input
            id="city"
            label="Cidade"
            placeholder="Digitar cidade"
            type="text"
            className={errors.addressInformation?.city ? "err" : ""}
            errorMessage={errors.addressInformation?.city?.message}
            {...register("addressInformation.city")}
            required
          />
        </div>
        <Input
          id="street"
          label="Rua"
          placeholder="Digitar rua"
          type="text"
          className={errors.addressInformation?.city ? "err" : ""}
          errorMessage={errors.addressInformation?.street?.message}
          {...register("addressInformation.street")}
          required
        />
        <div>
          <Input
            id="number"
            label="Número"
            placeholder="Digitar número"
            type="text"
            className={errors.addressInformation?.number ? "err" : ""}
            errorMessage={errors.addressInformation?.number?.message}
            {...register("addressInformation.number")}
            required
          />
          <Input
            id="complement"
            label="Complemento"
            placeholder="Ex: apart 307"
            type="text"
            className={errors.addressInformation?.complement ? "err" : ""}
            errorMessage={errors.addressInformation?.complement?.message}
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
          errorMessage={errors.password?.message}
          {...register("password")}
          required
        />
        <Input
          id="confirm"
          label="Confirmar Senha"
          placeholder="Digitar senha"
          type="password"
          className={errors.confirm ? "err" : ""}
          errorMessage={errors.confirm?.message}
          {...register("confirm")}
          required
        />
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
