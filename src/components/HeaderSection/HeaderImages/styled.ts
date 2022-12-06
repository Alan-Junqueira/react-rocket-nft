import styled from 'styled-components';

export const Container = styled.div`
  img {
    width: 100%;
    border: 1px solid ${props => props.theme.white};;
  }
`;

export const GroupTopImages = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 3.75rem;
  overflow: hidden;
`;

export const GroupBottonImages = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  overflow: hidden;
`;
