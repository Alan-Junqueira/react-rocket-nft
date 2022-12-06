import { PopularCard } from './components/PopularCard';
import {
  CardContainerLeft,
  CardContainerRight,
  PopularSectionContainer,
  CardContainers
} from './styled';

type PopularectinProps = {
  scrollId: string
}

export const PopularSection = ({scrollId}: PopularectinProps) => {
  return (
    <PopularSectionContainer id={scrollId}>
      <h2>
        <span>Populares</span> da semana
      </h2>
      <CardContainers>
        <CardContainerLeft>
          <PopularCard
            astronautName="Mayk Brito"
            astrounautImage="1"
            description="Astronauta 1"
            price="1.5"
          />

          <PopularCard
            astronautName="Jakeliny Gracielly"
            astrounautImage="2"
            description="Astronauta 2"
            price="2.0"
          />
        </CardContainerLeft>
        <CardContainerRight>
          <PopularCard
            astronautName="João Inácio (Biro)"
            astrounautImage="3"
            description="Astronauta 3"
            price="3.75"
          />

          <PopularCard
            astronautName="Tamires Santos"
            astrounautImage="4"
            description="Astronauta 4"
            price="4.30"
          />
        </CardContainerRight>
      </CardContainers>
    </PopularSectionContainer>
  );
};
