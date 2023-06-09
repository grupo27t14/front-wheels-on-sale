import styled from "styled-components";
 

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

export const Box = styled.div`
  width: 100%;
  height: 100%;
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
