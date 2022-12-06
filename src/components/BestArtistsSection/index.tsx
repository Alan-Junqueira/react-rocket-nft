import { ArtistCard } from './components/ArtistCard';
import {
  ArtistsContainer,
  BestArtistSectionContainer,
  SeeAllArtists
} from './styled';

import arrowImage from '../../assets/arrow-orange.svg';

type BestArtistsSectinProps = {
  scrollId: string;
};

export const BestArtistisSection = ({ scrollId }: BestArtistsSectinProps) => {
  return (
    <BestArtistSectionContainer id={scrollId}>
      <h2>
        Melhores <span>Artistas</span>
      </h2>
      <ArtistsContainer>
        <ArtistCard amountPhotos={80} artist="Mayk Brito" />
        <ArtistCard amountPhotos={99} artist="Jakeliny G." />
        <ArtistCard amountPhotos={50} artist="João I. (Biro)" />
        <ArtistCard amountPhotos={43} artist="Tamires Santos" />
        <ArtistCard amountPhotos={28} artist="Ana Silva" />
        <ArtistCard amountPhotos={20} artist="Diego F." />
      </ArtistsContainer>
      <SeeAllArtists>
        <span>Ver todos os artistas</span>
        <button>
          <img src={arrowImage} alt="" />
        </button>
      </SeeAllArtists>
    </BestArtistSectionContainer>
  );
};
