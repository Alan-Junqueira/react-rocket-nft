import { CardContainer, CardTitle, OwnerAndPrice } from './styled';

type PopularCardProps = {
  description: string;
  astronautName: string;
  price: string;
  astrounautImage: '1' | '2' | '3' | '4';
};

import astronaut1Image from '../../../../assets/astronauta-1.png';
import astronaut2Image from '../../../../assets/astronauta-2.png';
import astronaut3Image from '../../../../assets/astronauta-3.png';
import astronaut4Image from '../../../../assets/astronauta-4.png';

import arrowWhite from '../../../../assets/arrow-white.svg';

export const PopularCard = ({
  astronautName,
  astrounautImage,
  description,
  price
}: PopularCardProps) => {
  return (
    <CardContainer>
      <CardTitle>
        <h3>{description}</h3>
        <button>
          <img src={arrowWhite} alt="" />
        </button>
      </CardTitle>
      <OwnerAndPrice>
        <h4>{astronautName}</h4>
        <span>{price} RKT</span>
      </OwnerAndPrice>
      <img
        src={
          astrounautImage === '1'
            ? astronaut1Image
            : astrounautImage === '2'
            ? astronaut2Image
            : astrounautImage === '3'
            ? astronaut3Image
            : astronaut4Image
        }
        alt=""
      />
    </CardContainer>
  );
};
