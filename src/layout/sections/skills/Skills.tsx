/* import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { S } from './Skills_Styles';

export const Skills = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={'wrap'} justify={'space-between'}>
          <Skill
            iconId={'code'}
            title={'html5'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
          <Skill
            iconId={'css'}
            title={'css3'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
          <Skill
            iconId={'react'}
            title={'react'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
          <Skill
            iconId={'typeScript'}
            title={'typeScript'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
          <Skill
            iconId={'styledComponents'}
            title={'components'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
          <Skill
            iconId={'figma'}
            title={'WEB DESIgN'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};

const StyledSkills = styled.section`
  // background-color: #ffe5e4;
`;
 */

//////////////////////////////////////////////////

import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { S } from './Skills_Styles';

const skillData = [
  {
    iconId: 'code',
    title: 'html5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'css',
    title: 'css3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'react',
    title: 'react',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'typeScript',
    title: 'typeScript',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'styledComponents',
    title: 'styled components',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'figma',
    title: 'WEB DESIgN',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
];

export const Skills = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={'wrap'} justify={'space-between'}>
          {skillData.map((s, index) => {
            return (
              <Skill iconId={s.iconId} key={index} title={s.title} description={s.description} />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
