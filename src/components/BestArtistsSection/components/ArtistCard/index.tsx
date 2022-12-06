import React, { useState } from 'react';
import { ArtistCardContainer } from './styled';

import artista1Image from '../../../../assets/artista-1.png';
import artista2Image from '../../../../assets/artista-2.png';
import artista3Image from '../../../../assets/artista-3.png';
import artista4Image from '../../../../assets/artista-4.png';
import artista5Image from '../../../../assets/artista-5.png';
import artista6Image from '../../../../assets/artista-6.png';

type spanColor = 'orange' | 'white';

interface IArtistsCard {
  amountPhotos: number;
  artist: string;
}

export const ArtistCard = ({ amountPhotos, artist }: IArtistsCard) => {
  const [spanColor, setSpanColor] = useState<spanColor>('orange');

  return (
    <ArtistCardContainer
      onMouseOver={() => setSpanColor('white')}
      onMouseLeave={() => setSpanColor('orange')}
      spanColor={spanColor}
    >
      <img
        src={
          artist === 'Mayk Brito'
            ? artista1Image
            : artist === 'Jakeliny G.'
            ? artista2Image
            : artist === 'João I. (Biro)'
            ? artista3Image
            : artist === 'Tamires Santos'
            ? artista4Image
            : artist === 'Ana Silva'
            ? artista5Image
            : artist === 'Diego F.'
            ? artista6Image
            : ''
        }
        alt=""
      />
      <div>
        <h3>{artist}</h3>
        <span>{amountPhotos} Fotografias</span>
      </div>
    </ArtistCardContainer>
  );
};
