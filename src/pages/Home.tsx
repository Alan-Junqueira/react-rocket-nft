import ScrollReveal from 'scrollreveal';

import * as C from './styled';

import { ContentLayout } from '../components/layout/ContentLayout';

import backgroundImage from '../assets/background.png';
import Headernav from '../components/HeaderSection/HeaderNav';
import HeaderInfo from '../components/HeaderSection/HeaderInfo';

import HeaderImages from '../components/HeaderSection/HeaderImages';
import { InfoSection } from '../components/InfoSection';
import { PopularSection } from '../components/PopularSection';
import { BestArtistisSection } from '../components/BestArtistsSection';
import { useEffect, useState } from 'react';

function Home() {
  useEffect(() => {
    ScrollReveal({
      origin: 'left',
      distance: '50px',
      duration: 1000,
      reset: true
    }).reveal('#infoSectionContainer');

    ScrollReveal({
      origin: 'top',
      distance: '50px',
      duration: 1000,
      reset: true
    }).reveal('#popularSectionContainer');

    ScrollReveal({
      origin: 'right',
      distance: '50px',
      duration: 1000,
      reset: true
    }).reveal('#bestArtistsSectionContainer');
  }, []);

  const [infoContainerPositions, setInfoContainerPositions] = useState();

  function getPositions() {
    let element = document.querySelector('#bestArtistsSectionContainer');
    if (element) {
      let posicoes = element.getBoundingClientRect();

      // console.log(posicoes)
      console.log(window.scrollY > posicoes.top ? 'maior' : 'menor');
    }
  }

  useEffect(() => {
    getPositions();
  }, []);

  return (
    <C.Container className="App">
      <C.HeaderSection>
        <C.BackgroundImage src={backgroundImage} />
        <Headernav />
        <HeaderInfo />
        <HeaderImages />
      </C.HeaderSection>
      <ContentLayout>
        <InfoSection scrollId="infoSectionContainer" />
        <PopularSection scrollId="popularSectionContainer" />
        <BestArtistisSection scrollId="bestArtistsSectionContainer" />
      </ContentLayout>
    </C.Container>
  );
}

export default Home;
