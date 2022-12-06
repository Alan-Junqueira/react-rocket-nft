import styled from 'styled-components';

export const PopularSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  padding-top: 9.375rem;

  h2 {
    font-weight: 700;
    font-size: 3.125rem;
    line-height: 3.813rem;

    span {
      color: ${(props) => props.theme['orange-500']};
    }
  }
`;

export const CardContainers = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background-color: ${(props) => props.theme['gray-100']};
  }

  > span {
    width: 1px;
    height: 100%;
    background-color: red;
  }
`;

export const CardContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
