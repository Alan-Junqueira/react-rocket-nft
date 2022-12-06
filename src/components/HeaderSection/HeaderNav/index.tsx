/* eslint-disable @next/next/no-img-element */
import * as C from './styled';
import logoImage from '../../../assets/logo.svg';
import logoMetaMask from '../../../assets/logo_MetaMask.svg';

const Headernav = () => {
  return (
    <C.HeaderNavigation>
      <img src={logoImage} alt="" className="logo" />
      <ul>
        <li>
          <a href="">Comprar NFT</a>{' '}
        </li>
        <li>
          <a href="">Sobre</a>{' '}
        </li>
        <li>
          <a href="">FAQ</a>{' '}
        </li>
      </ul>
      <button>
        <img src={logoMetaMask} alt="" />
        <p>Conectar Carteira</p>
      </button>
    </C.HeaderNavigation>
  );
};

export default Headernav;
