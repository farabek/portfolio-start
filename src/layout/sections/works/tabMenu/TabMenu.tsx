/* import styled from 'styled-components';
import { Link } from '../../../../components/Link';

export const TabMenu = (props: { tabsItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.tabsItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  // margin-bottom: 40px;
  // ul {
  //   display: flex;
  //   gap: 20px;
  //   justify-content: center;
  // }
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`;

const ListItem = styled.li``;
 */

//////////////////////////////////////////////

import styled from 'styled-components';
import { Link } from '../../../../components/Link';

export type TabsStatusType = 'all' | 'landing' | 'react' | 'spa';

type TabMenuPropsType = {
  tabsItems: Array<{ status: TabsStatusType; title: string }>;
  changeFilterStatus: (value: TabsStatusType) => void;
  currentFilterStatus: string;
};

// export const TabMenu = (props: { tabsItems: Array<string> }) => {
export const TabMenu = (props: TabMenuPropsType) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.tabsItems.map((item, index) => {
          return (
            <ListItem key={index}>
              {/* <Link href="">{item}</Link> */}
              <Link
                active={props.currentFilterStatus === item.status}
                as={'button'}
                onClick={() => {
                  props.changeFilterStatus(item.status);
                }}>
                {item.title}
              </Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`;

const ListItem = styled.li``;
