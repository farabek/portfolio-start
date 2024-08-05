/* import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from './../../../assets/images/proj-1.png';
import timerImg from './../../../assets/images/proj-2.png';
import { Container } from '../../../components/Container';
import { TabMenu } from './tabMenu/TabMenu';

const worksItems = ['All', 'landing page', 'React', 'spa'];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={worksItems} />
        <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
          <Work
            title={'Social Network'}
            src={socialImg}
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <Work
            title={'Timer'}
            src={timerImg}
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  position: relative;

  ${FlexWrapper} {
    gap: 30px;
  }
`;
 */

//////////////////////////////////////////////////////

import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from './../../../assets/images/proj-1.png';
import timerImg from './../../../assets/images/proj-2.png';
import { Container } from '../../../components/Container';
import { TabMenu } from './tabMenu/TabMenu';
import { S } from './Works_Styles';

const worksItems = ['All', 'landing page', 'React', 'spa'];

const worksData = [
  {
    title: 'Social Network',
    src: socialImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },

  {
    title: 'Timer',
    src: timerImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
  },
];

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={worksItems} />
        <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
          {worksData.map((w, index) => {
            return <Work title={w.title} key={index} src={w.src} text={w.text} />;
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
