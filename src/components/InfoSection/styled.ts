import styled from 'styled-components';

export const InfoSectionContainer = styled.section`
  display: grid;
  grid-template-columns: 12.125rem 1fr;
  margin-left: -5rem;
  padding-left: 5rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-100']};
`;

export const StatusQuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.25rem;

  border-right: 1px solid ${(props) => props.theme['gray-100']};

  padding-right: 4.375;
  padding-block: 8.375rem;
`;

export const LabelQuantity = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-weight: 600;
    font-size: 3.125rem;
    line-height: 3.813rem;

    color: ${(props) => props.theme.white};
  }

  span {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.5rem;

    color: ${props => props.theme['gray-100']};
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  justify-content: space-between;

  margin-right: -5rem;

  > div {
    display: flex;
    gap: 7.75rem;
    padding: 5rem 8.5rem 4.5rem 4.25rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 4rem;

      p {
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 1.375rem;

        color: ${(props) => props.theme.white};

        a {
          font-weight: 400;
          font-size: 1.125rem;
          line-height: 1.375rem;
          text-decoration: underline;

          color: ${(props) => props.theme['orange-500']};
        }
      }

      a {
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 1.375rem;
        text-decoration: underline;
      }
    }
  }

  img {
    width: 100%;
  }
`;
