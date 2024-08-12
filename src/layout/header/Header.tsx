/* import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { HeaderMenu } from './headerMenu/HeaderMenu';
import { MobileMenu } from './mobileMenu/MobileMenu';

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={'space-between'} align={'center'}>
          <Logo />
          <HeaderMenu menuItems={items} />
          <MobileMenu menuItems={items} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: rgba(31, 31, 32, 0.9);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;
 */

/////////////////////////////////////////////////////

// import React from 'react';
// import { Logo } from '../../components/logo/Logo';
// import { Container } from '../../components/Container';
// import { FlexWrapper } from '../../components/FlexWrapper';
// import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';
// import { S } from './Header_Styles';
// import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';

// const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];

// export const Header: React.FC = () => {
//   const [width, setWidth] = React.useState(window.innerWidth);
//   const breakpoint = 768;

//   React.useEffect(() => {
//     const handleWindowResize = () => setWidth(window.innerWidth);
//     window.addEventListener('resize', handleWindowResize);
//     return () => window.removeEventListener('resize', handleWindowResize);
//   }, []);

//   return (
//     <S.Header>
//       <Container>
//         <FlexWrapper justify={'space-between'} align={'center'}>
//           <Logo />
//           {/*           <DesktopMenu menuItems={items} />
//           <MobileMenu menuItems={items} />
//  */}
//           {width < breakpoint ? (
//             <MobileMenu menuItems={items} />
//           ) : (
//             <DesktopMenu menuItems={items} />
//           )}
//         </FlexWrapper>
//       </Container>
//     </S.Header>
//   );
// };

/////////////////////////////////////////////////////

import React from 'react';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';
import { S } from './Header_Styles';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';

// const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={'space-between'} align={'center'}>
          <Logo />
          {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
