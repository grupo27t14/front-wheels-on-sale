import styled from "styled-components";
 

export const Box = styled.div`
  width: 100%;
  height: 100%;
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.3rem;
  width: 100%;
`;

export const HStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Title = styled.h4`
  ${(props) => props.theme.typography.heading7_500};
  color: ${(props) => props.theme.pallete.greyScale.grey1};
`;

export const SubTitle = styled.h4`
  ${(props) => props.theme.typography.heading7_500};
  color: ${(props) => props.theme.pallete.greyScale.grey1};
  margin-bottom: 2.5rem;
`;

export const Text = styled.p`
  ${(props) => props.theme.typography.body2_500};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 128px;
  max-height: 300px;
  resize: vertical;
  padding: 20px;

  ${(props) => props.theme.typography.heading7_500}
  color: ${(props) => props.theme.pallete.greyScale.grey1};
  background-color: ${(props) => props.theme.pallete.greyScale.grey10};

  border-radius: 0.4rem;
  border: 0.2rem solid ${(props) => props.theme.pallete.greyScale.grey7};

  font-family: "Inter", sans-serif;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  ::placeholder {
    color: ${(props) => props.theme.pallete.greyScale.grey3};
  }
`;
