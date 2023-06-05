import { CreateContactData, schema } from "./validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../Modal";
import { FormAddContact } from "./styles";

interface ModalTesteProps {
  toggleModal: () => void;
}

export const ModalTeste = ({ toggleModal }: ModalTesteProps) => {
  const { register, handleSubmit } = useForm<CreateContactData>({
    resolver: zodResolver(schema),
  });

  const createContact = async (data: CreateContactData) => {
    try {
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <FormAddContact onSubmit={handleSubmit(createContact)}>
        <h1>Teste modal</h1>
        <div>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            numquam consectetur repellat facilis quia reprehenderit delectus
            iste animi voluptates reiciendis non consequatur, explicabo odit
            repudiandae commodi, cumque, aspernatur ducimus asperiores?
          </span>
        </div>

        <button>teste</button>
      </FormAddContact>
    </Modal>
  );
};

