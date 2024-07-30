import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const SectionTitle = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  font-weight: 600;
  font-size: 50px;
  letter-spacing: 5px;
  margin-bottom: 80px;

  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);
  }
`;
