import { useForm } from "react-hook-form";
import { useUsers } from "../../hooks/useUser";
import { LoadingRing } from "../../styles/LoadingRing";
import { StyledButton } from "../../styles/button";
import { theme } from "../../styles/theme";
import { Form } from "../Form";
import { ErrorMessage } from "../Form/styles";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, HStack } from "./styled";
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
    userEdit(parsedData, user!.id);
    setIsModalOpen(!isModalOpen);
  };

  const handleUserDelete = (id: string) => {
    userDelete(id);
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navigate("");
    setIsModalOpen(!isModalOpen);
  };

  const cancelEditUser = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <FormControl>
      <Form title="Editar perfil" onSubmit={handleSubmit(handleRegisterSubmit)}>
        <h4>Informações pessoais</h4>
        <Input
          id="name"
          label="Nome"
          value={user?.name}
          placeholder="Ex: Samuel Leão"
          type="text"
          className={errors.name ? "err" : ""}
          {...register("name")}
        />
        {errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
        <Input
          id="email"
          label="Email"
          value={user?.email}
          placeholder="Ex: samuel@kenzie.com.br"
          type="email"
          className={errors.email ? "err" : ""}
          {...register("email")}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Input
          id="cpf"
          label="CPF"
          value={user?.personalInformation.cpf}
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
          value={user?.personalInformation.phone}
          placeholder="(DDD) 90000-0000"
          type="number"
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
          value={user?.personalInformation.birth_date}
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
          defaultValue={user?.personalInformation.description}
          className={errors.personalInformation?.description ? "err" : ""}
          {...register("personalInformation.description")}
        />
        <HStack>
          <StyledButton
            buttonstyle="negative"
            type="button"
            onClick={cancelEditUser}
          >
            Cancelar
          </StyledButton>

          <StyledButton
            buttonstyle="alert"
            type="button"
            onClick={() => handleUserDelete(user!.id)}
            disabled={reqLoading}
          >
            {reqLoading ? (
              <LoadingRing color={theme.colors.whiteFixed} />
            ) : (
              "Excluir Perfil"
            )}
          </StyledButton>

          <StyledButton
            buttonstyle="brand1"
            type="submit"
            disabled={reqLoading}
          >
            {reqLoading ? (
              <LoadingRing color={theme.colors.whiteFixed} />
            ) : (
              "Salvar alterações"
            )}
          </StyledButton>
        </HStack>
      </Form>
    </FormControl>
  );
};

export default EditProfile;
