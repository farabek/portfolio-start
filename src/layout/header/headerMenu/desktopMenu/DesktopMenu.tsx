/* import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

export const DesktopMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledDesktopMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="">
                {item}

                <Mask>
                  <span>{item}</span>
                </Mask>
                <Mask>
                  <span>{item}</span>
                </Mask>
              </Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledDesktopMenu>
  );
};

const StyledDesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const Link = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: transparent;
`;

const Mask = styled.span`
  position: absolute;
  top: o;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
//   outline: 1px solid red;
  color: ${theme.colors.accent};

  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
`;

const ListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`;
 */

// /////////////////////////////////////////////////

// import React from 'react';
// import styled from 'styled-components';
// import { Menu } from '../menu/Menu';
// import { theme } from '../../../../styles/Theme';

// export const DesktopMenu: React.FC<{ menuItems: Array<string> }> = (props: {
//   menuItems: Array<string>;
// }) => {
//   return (
//     <StyledDesktopMenu>
//       <Menu menuItems={props.menuItems} />
//     </StyledDesktopMenu>
//   );
// };

// const StyledDesktopMenu = styled.nav`
//   ul {
//     display: flex;
//     gap: 30px;
//     justify-content: center;
//   }

//   // @media ${theme.media.tablet} {
//   //   display: none;
//   // }
// `;

/////////////////////////////////////////////////

import React from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';

export const DesktopMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <S.DesktopMenu>
      <Menu menuItems={props.menuItems} />
    </S.DesktopMenu>
  );
};
