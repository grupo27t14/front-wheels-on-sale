import { useEffect, useState } from "react";
import { StyledButton } from "../../../styles/button";
import {
  VStack,
  HStack,
  Title,
  Box,
  Subtitulo,
  Text,
  ButtonGroup,
  Span,
} from "./styled";
import { useNavigate } from "react-router-dom";

interface IConfirmDeletion {
  title: string;
  subtitulo: string;
  text: string;
  text_btn_0?: string;
  text_btn_1?: string;
  text_btn_2?: string;
  onClick0?: () => void;
  onClick1?: () => void;
  onClick2?: () => void;
  visible?: string;
  color?: string;
  browse?: string;
  handleOpenModal?: () => void;
}

const ConfirmDeletion = ({
  title,
  subtitulo,
  text,
  text_btn_0,
  text_btn_1,
  text_btn_2,
  onClick0,
  onClick1,
  onClick2,
  visible,
  color,
  browse,
  handleOpenModal,
}: IConfirmDeletion) => {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 1) {
      if (browse) {
        navigate(browse);
      }

      if (handleOpenModal) {
        handleOpenModal();
      }
      return;
    }

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <VStack>
      <Title>{title}</Title>
      <Box>
        <Subtitulo>{subtitulo}</Subtitulo>
        <Text>{text}</Text>
      </Box>

      <VStack className="column">
        <HStack>
          {text_btn_0 && (
            <StyledButton
              buttonstyle="brand1"
              buttonsize="fit"
              onClick={onClick0}
            >
              {text_btn_0}
            </StyledButton>
          )}

          <ButtonGroup>
            {text_btn_1 && (
              <StyledButton
                buttonstyle="negative"
                buttonsize="fit"
                onClick={onClick1}
              >
                {text_btn_1}
              </StyledButton>
            )}
            {text_btn_2 && (
              <StyledButton
                buttonstyle="alert"
                buttonsize="fit"
                onClick={onClick2}
              >
                {text_btn_2}
              </StyledButton>
            )}
          </ButtonGroup>
        </HStack>
        {count !== 1 && <Span $visible={visible} $bg={color}></Span>}
      </VStack>
    </VStack>
  );
};

export default ConfirmDeletion;
