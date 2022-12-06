import styled from 'styled-components';

export const HeaderNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    max-width: 265px;
    width: 100%;
  }

  ul {
    display: flex;
    gap: 3.75rem;

    a {
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 22px;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.625rem 1.375rem 0.875rem;

    p {
      color: ${props => props.theme.black};;
      font-weight: 700;
      font-size: 1rem;
      line-height: 20px;
    }
  }
`;
