/* import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconWrapper } from '../skills/skill/Skill';
import { Container } from '../../../components/Container';

export const Testimony = () => {
  return (
    <StyledTestimony>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={'column'} align={'center'}>
          <IconWrapper>
            <Icon iconId={'quote'} />
          </IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  background-color: #aeb9ff;
  min-height: 50vh;
  position: relative;
  
    ${IconWrapper} {
    margin: 28px 0 72px;
  }

  }
`;
 */

////////////////////////////////////////////////

import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { S } from '../skills/Skills_Styles';

export const Testimony: React.FC = () => {
  return (
    <StyledTestimony id={'testimony'}>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={'column'} align={'center'}>
          <S.IconWrapper>
            <Icon iconId={'quote'} />
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  background-color: #aeb9ff;
  min-height: 50vh;
  position: relative;
  
    ${S.IconWrapper} {
    margin: 28px 0 72px;
  }

  }
`;
