import styled from 'styled-components';

export const BestArtistSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;

  margin-top: 9.5rem;

  h2 {
    font-weight: 700;
    font-size: 3.125rem;
    line-height: 3.813rem;
    text-align: center;

    span {
      color: ${(props) => props.theme['orange-500']};
    }
  }
`;

export const ArtistsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 7rem;
`;

export const SeeAllArtists = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  span {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    width: 30px;
    height: 30px;
  }
`;
