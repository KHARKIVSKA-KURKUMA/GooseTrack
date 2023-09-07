import React from 'react';
import { PageWrapper } from './PageLayout.styled';

const PageLayout = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>;
};

export default PageLayout;
