import * as C from './styled';
import image1 from '../../../assets/galeria-1.png';
import image2 from '../../../assets/galeria-2.png';
import image3 from '../../../assets/galeria-3.png';
import image4 from '../../../assets/galeria-4.png';
import image5 from '../../../assets/galeria-5.png';
import image6 from '../../../assets/galeria-6.png';
import image7 from '../../../assets/galeria-7.png';
import image8 from '../../../assets/galeria-8.png';

const HeaderImages = () => {
  return (
    <C.Container>
      <C.GroupTopImages>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </C.GroupTopImages>
      <C.GroupBottonImages>
        <img src={image5} alt="" />
        <img src={image6} alt="" />
        <img src={image7} alt="" />
        <img src={image8} alt="" />
      </C.GroupBottonImages>
    </C.Container>
  );
};

export default HeaderImages;
