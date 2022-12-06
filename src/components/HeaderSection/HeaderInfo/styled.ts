import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 5.625rem;
  margin-bottom: 6.25rem;
`;

export const AvatarsImage = styled.img`
  max-width: 169px;
  height: 87px;
  margin-right: 0.5rem;
`;

export const LeftSide = styled.div`
  > p {
    margin-bottom: 3.4375rem;

    font-weight: 400;
    font-size: 1.125rem;
    line-height: 22px;
  }

  > div {
    display: flex;

    div {
      display: grid;
      grid-template-rows: 1fr 1fr;

      strong {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 22px;
      }

      p {
        grid-row: 2/3;
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 22px;
      }
    }
  }
`;

export const CenterTitle = styled.h1`
  font-weight: 700;
  font-size: 3.125rem;
  line-height: 61px;

  strong {
    color: ${props => props.theme['orange-500']};;
  }
`;

export const RightSide = styled.img``;
