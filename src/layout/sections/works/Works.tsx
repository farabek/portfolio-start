/* import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from './../../../assets/images/proj-1.png';
import timerImg from './../../../assets/images/proj-2.png';
import { Container } from '../../../components/Container';
import { TabMenu } from './tabMenu/TabMenu';

const tabsItems = ['All', 'landing page', 'React', 'spa'];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={tabsItems} />
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
/* 
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from './../../../assets/images/proj-1.png';
import timerImg from './../../../assets/images/proj-2.png';
import { Container } from '../../../components/Container';
import { TabMenu } from './tabMenu/TabMenu';
import { S } from './Works_Styles';

const tabsItems = ['All', 'landing page', 'React', 'spa'];

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
        <TabMenu menuItems={tabsItems} />
        <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
          {worksData.map((w, index) => {
            return <Work title={w.title} key={index} src={w.src} text={w.text} />;
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
 */

///////////////////////////////////////////////////////////////////

// import { SectionTitle } from '../../../components/SectionTitle';
// import { FlexWrapper } from '../../../components/FlexWrapper';
// import { Work } from './work/Work';
// import socialImg from './../../../assets/images/proj-1.png';
// import timerImg from './../../../assets/images/proj-2.png';
// import { Container } from '../../../components/Container';
// import { TabMenu, TabsStatusType } from './tabMenu/TabMenu';
// import { S } from './Works_Styles';
// import { useState } from 'react';

// // const tabsItems = ['All', 'landing page', 'React', 'spa'];

// const tabsItems: Array<{ status: TabsStatusType; title: string }> = [
//   {
//     title: 'All',
//     status: 'all',
//   },
//   {
//     title: 'Landing page',
//     status: 'landing',
//   },
//   {
//     title: 'React',
//     status: 'react',
//   },
//   {
//     title: 'Spa',
//     status: 'spa',
//   },
// ];

// const worksData = [
//   {
//     title: 'Social Network',
//     src: socialImg,
//     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
//     type: 'spa',
//   },

//   {
//     title: 'Timer',
//     src: timerImg,
//     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
//     type: 'react',
//   },
// ];

// export const Works: React.FC = () => {
//   const [currentFilterStatus, setCurrentFilterStatus] = useState('all');

//   // let filteredWorks = worksData;
//   // if (currentFilterStatus === 'landing') {
//   //   filteredWorks = worksData.filter((work) => work.type === 'landing');
//   // }

//   // if (currentFilterStatus === 'react') {
//   //   filteredWorks = worksData.filter((work) => work.type === 'react');
//   // }

//   // if (currentFilterStatus === 'spa') {
//   //   filteredWorks = worksData.filter((work) => work.type === 'spa');
//   // }

//   const filteredWorks = worksData.filter((work) =>
//     currentFilterStatus === 'all' ? true : work.type === currentFilterStatus,
//   );

//   function changeFilterStatus(value: TabsStatusType) {
//     setCurrentFilterStatus(value);
//   }

//   return (
//     <S.Works id="works">
//       <Container>
//         <SectionTitle>My Works</SectionTitle>
//         <TabMenu
//           tabsItems={tabsItems}
//           changeFilterStatus={changeFilterStatus}
//           currentFilterStatus={currentFilterStatus}
//         />
//         <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
//           {/* {worksData.map((w, index) => { */}
//           {filteredWorks.map((w, index) => {
//             return <Work title={w.title} key={index} src={w.src} text={w.text} />;
//           })}
//         </FlexWrapper>
//       </Container>
//     </S.Works>
//   );
// };

///////////////////////////////////////////////////////////////////

// import { SectionTitle } from '../../../components/SectionTitle';
// import { FlexWrapper } from '../../../components/FlexWrapper';
// import { Work } from './work/Work';
// import socialImg from './../../../assets/images/proj-1.png';
// import timerImg from './../../../assets/images/proj-2.png';
// import { Container } from '../../../components/Container';
// import { TabMenu, TabsStatusType } from './tabMenu/TabMenu';
// import { S } from './Works_Styles';
// import { useState } from 'react';

// const tabsItems: Array<{ status: TabsStatusType; title: string }> = [
//   {
//     title: 'All',
//     status: 'all',
//   },
//   {
//     title: 'Landing page',
//     status: 'landing',
//   },
//   {
//     title: 'React',
//     status: 'react',
//   },
//   {
//     title: 'Spa',
//     status: 'spa',
//   },
// ];

// const worksData = [
//   {
//     title: 'Social Network',
//     src: socialImg,
//     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
//     type: 'spa',
//   },

//   {
//     title: 'Timer',
//     src: timerImg,
//     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
//     type: 'react',
//   },
// ];

// export const Works: React.FC = () => {
//   const [currentFilterStatus, setCurrentFilterStatus] = useState('all');

//   let filteredWorks = worksData;
//   if (currentFilterStatus === 'landing') {
//     filteredWorks = worksData.filter((work) => work.type === 'landing');
//   }

//   if (currentFilterStatus === 'react') {
//     filteredWorks = worksData.filter((work) => work.type === 'react');
//   }

//   if (currentFilterStatus === 'spa') {
//     filteredWorks = worksData.filter((work) => work.type === 'spa');
//   }

//   function changeFilterStatus(value: TabsStatusType) {
//     setCurrentFilterStatus(value);
//   }

//   return (
//     <S.Works id="works">
//       <Container>
//         <SectionTitle>My Works</SectionTitle>
//         <TabMenu
//           tabsItems={tabsItems}
//           changeFilterStatus={changeFilterStatus}
//           currentFilterStatus={currentFilterStatus}
//         />
//         <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
//           {filteredWorks.map((w, index) => {
//             return <Work title={w.title} key={index} src={w.src} text={w.text} />;
//           })}
//         </FlexWrapper>
//       </Container>
//     </S.Works>
//   );
// };

///////////////////////////////////////////////

import React, { useState } from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from './../../../assets/images/proj-1.png';
import timerImg from './../../../assets/images/proj-2.png';
import { Container } from '../../../components/Container';
import { TabMenu, TabsStatusType } from './tabMenu/TabMenu';
import { S } from './Works_Styles';
import { AnimatePresence, motion } from 'framer-motion';

const tabsItems: Array<{ status: TabsStatusType; title: string }> = [
  {
    title: 'All',
    status: 'all',
  },
  {
    title: 'landing page',
    status: 'landing',
  },
  {
    title: 'React',
    status: 'react',
  },
  {
    title: 'spa',
    status: 'spa',
  },
];

const worksData = [
  {
    title: 'Social Network',
    src: socialImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    type: 'spa',
    id: 1,
  },

  {
    title: 'Timer',
    src: timerImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
    type: 'react',
    id: 2,
  },

  {
    title: 'Social Network',
    src: socialImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    type: 'spa',
    id: 3,
  },

  {
    title: 'Timer',
    src: timerImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
    type: 'react',
    id: 4,
  },

  {
    title: 'Social Network',
    src: socialImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    type: 'spa',
    id: 5,
  },

  {
    title: 'Timer',
    src: timerImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
    type: 'react',
    id: 6,
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState('all');
  let filteredWorks = worksData;

  if (currentFilterStatus === 'landing') {
    filteredWorks = worksData.filter((work) => work.type === 'landing');
  }

  if (currentFilterStatus === 'react') {
    filteredWorks = worksData.filter((work) => work.type === 'react');
  }

  if (currentFilterStatus === 'spa') {
    filteredWorks = worksData.filter((work) => work.type === 'spa');
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id={'works'}>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
          <AnimatePresence>
            {filteredWorks.map((w) => {
              return (
                <motion.div
                  style={{ width: '400px', flexGrow: 1, maxWidth: '540px' }}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={w.id}>
                  <Work title={w.title} src={w.src} text={w.text} key={w.id} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
