import styled from 'styled-components';
import { theme } from '../styles/Theme';
import { font } from '../styles/Common';

export const SectionTitle = styled.h2`
  ${font({ family: "'Josefin Sans', sans-serif", weight: 600, Fmax: 36, Fmin: 30 })}
  // font-family: 'Josefin Sans', sans-serif;
  // font-weight: 600;
  // font-size: 36px;
  text-align: center;
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

    @media ${theme.media.mobile} {
      bottom: -24px;
    }
  }
`;
