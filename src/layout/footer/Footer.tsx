import React from 'react';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import styled from 'styled-components';

const socialItemsData = [
  {
    iconId: 'instagram',
  },
  {
    iconId: 'telegram',
  },
  {
    iconId: 'vk',
  },
  {
    iconId: 'linkedin',
  },
];

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={'column'} align={'center'}>
        <Name>Svetlana</Name>
        <SocialList>
          {socialItemsData.map((s, index) => {
            return (
              <SocialItem key={index}>
                <SocialLink>
                  <Icon height={'21'} width={'21'} viewBox={'0 0 21 21'} iconId={s.iconId} />
                </SocialLink>
              </SocialItem>
            );
          })}
        </SocialList>
        <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 40px 0;
  position: relative;
  background-color: #ffd8a5;
`;

const Name = styled.span`
  letter-spacing: 3px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`;
