import React from 'react';
import SectionTitleExtended from 'components/UI/Title/Title';
import SectionTitleWrapper from './SectionTitle.style';

const SectionTitle = ({ ...props }) => {
  return (
    <SectionTitleWrapper>
      <SectionTitleExtended {...props} />
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
