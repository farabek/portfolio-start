/* import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { theme } from '../../../../styles/Theme';

type SkillPropsType = {
  iconId: string;
  title: string;
  description: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction="column" align="center">
        <IconWrapper>
          <Icon iconId={props.iconId} />
        </IconWrapper>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.description} </SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 42px 20px 52px;

  @media ${theme.media.mobile} {
    padding: 62px 0 40px;
  }
`;

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`;

const SkillText = styled.p`
  text-align: center;
`;

export const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg) translate(-50%, -50%);

    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`;
 */

/////////////////////////////////////////////////////////////////

import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { S } from '../Skills_Styles';

type SkillPropsType = {
  iconId: string;
  title: string;
  description: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <FlexWrapper direction="column" align="center">
        <S.IconWrapper>
          <Icon iconId={props.iconId} />
        </S.IconWrapper>
        <S.SkillTitle>{props.title}</S.SkillTitle>
        <S.SkillText>{props.description} </S.SkillText>
      </FlexWrapper>
    </S.Skill>
  );
};
