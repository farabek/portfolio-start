import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </Text>
          <Name>@Ivan Ivanov</Name>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span></span>
        <span></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slide = styled.div`
  text-align: center;
`;

const Text = styled.p``;

const Name = styled.span``;

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    margin: 5px;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;