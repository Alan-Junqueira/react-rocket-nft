import * as C from './styled';
import groupAvatarsImage from '../../../assets/group-avatars.png';
import badgeImage from '../../../assets/badge.svg';

const HeaderInfo = () => {
  return (
    <C.Container>
      <C.LeftSide>
        <p>
          Mercado digital para colecionáveis em <br /> criptos e tokens não
          fungível (NFT). <br />
          Compre, venda e descubra ativos digitais <br /> exclusivos para você.
        </p>
        <div>
          <C.AvatarsImage src={groupAvatarsImage} alt="" />
          <div>
            <p>
              {' '}
              <strong>+10</strong> <br /> Artistas selecionados
            </p>
          </div>
        </div>
      </C.LeftSide>

      <C.CenterTitle>
        Descubra a verdadeira <br />
        arte digital e <br /> colecione diversas <br />
        <strong>NFTs</strong>
      </C.CenterTitle>

      <C.RightSide src={badgeImage} alt="" />
    </C.Container>
  );
};

export default HeaderInfo;
