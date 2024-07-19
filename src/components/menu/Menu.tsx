import React from 'react';
import styled from 'styled-components';

export function Menu() {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="Home">Home</a>
        </li>
        <li>
          <a href="Skills">Skills</a>
        </li>
        <li>
          <a href="Works">Works</a>
        </li>
        <li>
          <a href="Testimony">Testimony</a>
        </li>
        <li>
          <a href="Contact">Contact</a>
        </li>
      </ul>
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;
