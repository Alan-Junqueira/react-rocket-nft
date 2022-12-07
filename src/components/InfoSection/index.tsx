import {
  DescriptionContainer,
  InfoSectionContainer,
  LabelQuantity,
  StatusQuantityContainer
} from './styled';

import bannerImage from '../../assets/banner.png';
type InfoSectinProps = {
  scrollId: string
}

export const InfoSection = ({scrollId}: InfoSectinProps) => {
  return (
    <InfoSectionContainer id={scrollId}>
      <StatusQuantityContainer>
        <LabelQuantity>
          <strong>10k+</strong>
          <span>Artes</span>
        </LabelQuantity>
        <LabelQuantity>
          <strong>10k+</strong>
          <span>Artes</span>
        </LabelQuantity>
        <LabelQuantity>
          <strong>10k+</strong>
          <span>Artes</span>
        </LabelQuantity>
      </StatusQuantityContainer>

      <DescriptionContainer>
        <div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id <a href="">otenti diam</a> p et
              cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris
              mattis nunc semper.
            </p>
            <a href="">Lorem ipsum</a>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id <a href="">otenti diam</a> p et
              cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris
              mattis nunc semper.
            </p>
            <a href="">Lorem ipsum</a>
          </div>
        </div>
        <img src={bannerImage} alt="" />
      </DescriptionContainer>
    </InfoSectionContainer>
  );
};
