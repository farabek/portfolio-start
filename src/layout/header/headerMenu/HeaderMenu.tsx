import React from 'react';
import styled from 'styled-components';

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            // <li key={index}>
            //   <a href="">{item}</a>
            // </li>
            <ListItem key={index}>
              <Link href="">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;

const ListItem = styled.li``;

const Link = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #757205;
`;
