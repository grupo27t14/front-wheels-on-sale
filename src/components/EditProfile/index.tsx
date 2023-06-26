import { useForm } from "react-hook-form";
import { useUsers } from "../../hooks/useUser";
import { LoadingRing } from "../../styles/LoadingRing";
import { StyledButton } from "../../styles/button";
import { theme } from "../../styles/theme";
import { Form } from "../Form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { HStack } from "./styled";
import { editSchemaRequest, tRegisterReq } from "../../pages/Register/schemas";
import { useNavigate } from "react-router-dom";

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const EditProfile = ({ isModalOpen, setIsModalOpen }: IProps) => {
  const { user, setUser, userEdit, userDelete, reqLoading } = useUsers();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tRegisterReq>({
    resolver: zodResolver(editSchemaRequest),
  });

  const handleRegisterSubmit = (data: tRegisterReq) => {
    const parsedData = editSchemaRequest.parse(data);
    if (user) userEdit(parsedData, user.id);
    setIsModalOpen(!isModalOpen);
  };

  const handleUserDelete = () => {
    if (user) userDelete(user.id);
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navigate("");
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Form
      title="Editar perfil"
      onSubmit={handleSubmit(handleRegisterSubmit)}
      margin="0"
      padding="6px"
      width="100%"
    >
      <h4>Informações pessoais</h4>
      <Input
        id="name"
        label="Nome"
        value={user?.name}
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
        value={user?.email}
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
        value={user?.personalInformation.cpf}
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
        value={user?.personalInformation.phone}
        placeholder="(DDD) 90000-0000"
        type="number"
        className={errors.personalInformation?.phone ? "err" : ""}
        errorMessage={errors.personalInformation?.phone?.message}
        {...register("personalInformation.phone")}
        required
      />
      <Input
        id="birth_date"
        label="Data de nascimento"
        value={user?.personalInformation.birth_date}
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
        defaultValue={user?.personalInformation.description}
        placeholder="..."
        className={errors.personalInformation?.description ? "err" : ""}
        {...register("personalInformation.description")}
      />
      <HStack>
        <StyledButton
          buttonstyle="negative"
          type="button"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Cancelar
        </StyledButton>

        <StyledButton
          buttonstyle="alert"
          type="button"
          onClick={() => handleUserDelete()}
          disabled={reqLoading}
        >
          {reqLoading ? (
            <LoadingRing color={theme.colors.whiteFixed} />
          ) : (
            "Excluir Perfil"
          )}
        </StyledButton>

        <StyledButton buttonstyle="brand1" type="submit" disabled={reqLoading}>
          {reqLoading ? (
            <LoadingRing color={theme.colors.whiteFixed} />
          ) : (
            "Salvar alterações"
          )}
        </StyledButton>
      </HStack>
    </Form>
  );
};

export default EditProfile;
