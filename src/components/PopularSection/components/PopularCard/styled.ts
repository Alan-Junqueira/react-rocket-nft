import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 350px;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
  }

  button {
    background-color: transparent;
  }
`;

export const CardTitle = styled.div`
  margin-bottom: 2.75rem;

  h3 {
    font-weight: 500;
    font-size: 1.875rem;
    line-height: 2.313rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;
  }
`;

export const OwnerAndPrice = styled.div`
  margin-bottom: 1.625rem;

  h4 {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.5rem;

    color: ${(props) => props.theme['gray-100']};
  }

  span {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5rem;

    color: ${(props) => props.theme['orange-500']};
  }
`;
