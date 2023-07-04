import { useUsers } from "../../hooks/useUser";
import { LoadingRing } from "../../styles/LoadingRing";
import { StyledButton } from "../../styles/button";
import { theme } from "../../styles/theme";
import { Form } from "../Form";
import { Input } from "../Input";
import { HStack } from "./styled";
import { editSchemaRequest, tRegisterReq } from "../../pages/Register/schemas";
import { useEditAi } from "./useEditAi";

interface iEditAiProps {
  isModalEditAddress: boolean;
  setIsModalEditAddress: (isModalEditAddress: boolean) => void;
}

const EditAddress = ({
  isModalEditAddress,
  setIsModalEditAddress,
}: iEditAiProps) => {
  const { user, userEdit, reqLoading } = useUsers();
  const { errors, handleSubmit, register } = useEditAi();

  const handleRegisterSubmit = (data: tRegisterReq) => {
    const parsedData = editSchemaRequest.parse(data);
    if (user) userEdit(parsedData, user.id);
    setIsModalEditAddress(!isModalEditAddress);
  };

  const cancelEditUser = () => {
    setIsModalEditAddress(!isModalEditAddress);
  };

  return (
    <Form
      title="Editar endereço"
      onSubmit={handleSubmit(handleRegisterSubmit)}
      margin="0"
      padding="6px"
      width="100%"
    >
      <h4>Informações de endereço</h4>
      <Input
        id="cep"
        label="CEP"
        placeholder="000000.000"
        value={user?.addressInformation.cep}
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
          value={user?.addressInformation.state}
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
          value={user?.addressInformation.city}
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
        value={user?.addressInformation.street}
        type="text"
        className={errors.addressInformation?.street ? "err" : ""}
        errorMessage={errors.addressInformation?.street?.message}
        {...register("addressInformation.street")}
        required
      />
      <div>
        <Input
          id="number"
          label="Número"
          placeholder="Digitar número"
          value={user?.addressInformation.number}
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
          value={user?.addressInformation.complement}
          type="text"
          className={errors.addressInformation?.complement ? "err" : ""}
          errorMessage={errors.addressInformation?.complement?.message}
          {...register("addressInformation.complement")}
        />
      </div>
      <HStack>
        <StyledButton
          buttonstyle="negative"
          type="button"
          onClick={cancelEditUser}
          buttonsize="big"
        >
          Cancelar
        </StyledButton>

        <StyledButton
          buttonstyle="brand1"
          type="submit"
          disabled={reqLoading}
          buttonsize="big"
        >
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

export default EditAddress;
