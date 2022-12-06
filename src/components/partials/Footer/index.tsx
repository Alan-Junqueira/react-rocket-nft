import React from 'react';
import {
  ContactArea,
  FooterContainer,
  FooterHeader,
  FooterInfo,
  FooterNavigation,
  FooterSocial
} from './styled';

import logoImage from '../../../assets/logo.svg';
import arrowImage from '../../../assets/arrow-black.svg';
import instaLogoImage from '../../../assets/instagram.svg';
import ytLogoImage from '../../../assets/youtube.svg';
import twitterLogoImage from '../../../assets/twitter.svg';
import mailLogoImage from '../../../assets/email.svg';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeader>
        <img src={logoImage} alt="Rocket NFTs" />
        <button>
          <img src={arrowImage} alt="" />
        </button>
      </FooterHeader>

      <FooterInfo>
        <ContactArea>
          <span>
            Fique por dentro de <br /> <strong>todas as novidades</strong>
          </span>
          <div>
            <input type="text" placeholder="nft@rocketseat.com.br" />
            <button>Enviar</button>
          </div>
        </ContactArea>

        <FooterNavigation>
          <div>
            <h4>Empresa</h4>
            <a href="">Sobre</a>
            <a href="">Serviços</a>
            <a href="">Time</a>
            <a href="">Carreira</a>
          </div>

          <div>
            <h4>Mapa</h4>
            <a href="">Galeria</a>
            <a href="">Populares</a>
            <a href="">Venda</a>
            <a href="">Contato</a>
          </div>

          <div>
            <h4>Links</h4>
            <a href="">FAQs</a>
            <a href="">Termos</a>
            <a href="">Política</a>
            <a href="">Ajuda</a>
          </div>
        </FooterNavigation>
      </FooterInfo>
      <FooterSocial>
        <a href="">www.rocketseat.com.br</a>
        <div>
          <a href="">
            <img src={instaLogoImage} alt="" />
          </a>
          <a href="">
            <img src={ytLogoImage} alt="" />
          </a>
          <a href="">
            <img src={twitterLogoImage} alt="" />
          </a>
          <a href="">
            <img src={mailLogoImage} alt="" />
          </a>
        </div>
      </FooterSocial>
    </FooterContainer>
  );
};
