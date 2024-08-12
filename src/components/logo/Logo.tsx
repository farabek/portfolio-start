/* import React from 'react';
import { Icon } from '../icon/Icon';

export const Logo: React.FC = () => {
  return (
    <a href="">
      <Icon iconId={'code'} />
    </a>
  );
};
 */

/////////////////////////////////////////////

import React from 'react';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';

export const Logo: React.FC = () => {
  return (
    <a
      onClick={() => {
        scroll.scrollToTop();
      }}>
      <Icon iconId={'code'} />
    </a>
  );
};
