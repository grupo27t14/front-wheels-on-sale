import { useForm } from "react-hook-form";
import { useUsers } from "../../hooks/useUser";
import { LoadingRing } from "../../styles/LoadingRing";
import { StyledButton } from "../../styles/button";
import { theme } from "../../styles/theme";
import { Form } from "../Form";
import { ErrorMessage } from "../Form/styles";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, Flex, HStack } from "./styled";
import { editSchemaRequest, tRegisterReq } from "../../pages/Register/schemas";

interface IProps {
  isModalEditAddress: boolean;
  setIsModalEditAddress: (isModalEditAddress: boolean) => void;
}

const EditAddress = ({ isModalEditAddress, setIsModalEditAddress }: IProps) => {
  const { user, userEdit, reqLoading } = useUsers();

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
    setIsModalEditAddress(!isModalEditAddress);
  };

  const cancelEditUser = () => {
    setIsModalEditAddress(!isModalEditAddress);
  };

  return (
    <FormControl>
      <Form
        title="Editar endereço"
        onSubmit={handleSubmit(handleRegisterSubmit)}
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
          {...register("addressInformation.cep")}
        />
        {errors.addressInformation?.cep && (
          <ErrorMessage>{errors.addressInformation?.cep.message}</ErrorMessage>
        )}
        <Flex>
          <Input
            id="state"
            label="Estado"
            placeholder="Digitar Estado"
            value={user?.addressInformation.state}
            type="text"
            className={errors.addressInformation?.state ? "err" : ""}
            {...register("addressInformation.state")}
          />
          <Input
            id="city"
            label="Cidade"
            placeholder="Digitar cidade"
            value={user?.addressInformation.city}
            type="text"
            className={errors.addressInformation?.city ? "err" : ""}
            {...register("addressInformation.city")}
          />
        </Flex>
        <Input
          id="street"
          label="Rua"
          placeholder="Digitar rua"
          value={user?.addressInformation.street}
          type="text"
          className={errors.addressInformation?.city ? "err" : ""}
          {...register("addressInformation.street")}
        />
        {errors.addressInformation?.street && (
          <ErrorMessage>
            {errors.addressInformation?.street.message}
          </ErrorMessage>
        )}
        <Flex>
          <Input
            id="number"
            label="Número"
            placeholder="Digitar número"
            value={user?.addressInformation.number}
            type="text"
            className={errors.addressInformation?.number ? "err" : ""}
            {...register("addressInformation.number")}
          />
          <Input
            id="complement"
            label="Complemento"
            placeholder="Ex: apart 307"
            value={user?.addressInformation.complement}
            type="text"
            className={errors.addressInformation?.complement ? "err" : ""}
            {...register("addressInformation.complement")}
          />
        </Flex>
        <HStack>
          <StyledButton
            buttonstyle="negative"
            type="button"
            onClick={cancelEditUser}
          >
            Cancelar
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

export default EditAddress;
