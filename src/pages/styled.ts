import styled from 'styled-components';

export const Container = styled.div`
  color: ${props => props.theme.white};
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const HeaderSection = styled.section`
  position: relative;
  padding: 3.5625rem 5rem 0;
`;
