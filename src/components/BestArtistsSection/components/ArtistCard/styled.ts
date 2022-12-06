import styled, { css } from 'styled-components';

type ArtistaContainerProps = {
  spanColor: 'orange' | 'white';
};

export const ArtistCardContainer = styled.div<ArtistaContainerProps>`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  /* max-width: 350px; */
  width: 100%;
  height: 150px;
  padding: 1.5rem 1rem 1.5rem 2rem;

  background-color: ${(props) => props.theme['gray-300']};
  transition: all ease 0.3s;

  &:hover {
    background-color: ${(props) => props.theme['orange-500']};
    color: ${(props) => props.theme.white};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    h3,
    span {
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 1.5rem;
    }

    span {
      transition: all ease 0.3s;
      ${(props) =>
        props.spanColor === 'white' &&
        css`
          color: ${props.theme.white};
        `}
      ${(props) =>
        props.spanColor === 'orange' &&
        css`
          color: ${props.theme['orange-500']};
        `}
    }
  }
`;
