import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 5rem 0 3.75rem 0;
  background-color: ${(props) => props.theme['gray-300']};
`;

export const FooterHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 5rem 3.75rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-100']};

  button {
    width: 80px;
    height: 80px;
    background-color: ${(props) => props.theme['orange-500']};
  }
`;

export const FooterInfo = styled.div`
  display: flex;

  padding-left: 5rem;
  padding-right: 190px;
  border-bottom: 1px solid ${(props) => props.theme['gray-100']}; ;
`;

export const ContactArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 4.25rem 3.75rem 3.25rem 0;
  padding-right: 3.75rem;

  border-right: 1px solid ${(props) => props.theme['gray-100']};

  span {
    font-weight: 500;
    font-size: 1.875rem;
    line-height: 2.313rem;

    strong {
      color: ${(props) => props.theme['orange-500']};
    }
  }

  div {
    display: flex;

    input {
      height: 66px;
      min-width: 280px;
      width: 100%;
      padding: 20px 25px 20px 20px;
      background-color: ${(props) => props.theme['gray-800']};

      &::placeholder {
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.5rem;

        color: ${(props) => props.theme['gray-100']};
      }
    }

    button {
      width: 122px;
      height: 66px;

      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.5rem;

      color: ${(props) => props.theme.black};
      background-color: ${(props) => props.theme.white};
    }
  }
`;

export const FooterNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4.75rem 0 3.25rem 7.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    font-size: 1.25rem;
    line-height: 1.5rem;

    h4 {
      font-weight: 700;
    }

    a {
      font-weight: 400;
      color: ${(props) => props.theme['gray-100']};
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5rem 5rem 0 5rem;

  > a {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5rem;

    color: ${(props) => props.theme['gray-100']};
  }

  div {
    display: flex;
    align-items: center;
    gap: 3rem;

    a {
      width: 30px;
      height: 30px;
    }
  }
`;
