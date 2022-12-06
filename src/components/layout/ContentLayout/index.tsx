import { ReactNode } from 'react';
import { Footer } from '../../partials/Footer';
import { ContentLayoutContainer } from './styled';

type ContentLayoutProps = {
  children: ReactNode;
};

export const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <>
      <ContentLayoutContainer>{children}</ContentLayoutContainer>
      <Footer />
    </>
  );
};
