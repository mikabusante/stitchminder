import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import Sidebar from './Sidebar.js';
import Item from './Item';

import colors from '../dmc-scraper/colors.json';

const Reference = () => {
  return (
    <Wrapper>
      <Sidebar />
      <div>
        <Title>Reference</Title>

        <div>
          Start logging your collection.
          <a href='/auth/google'>Log in with Google</a>
        </div>
        <Colors>
          {colors.map(item => (
            <Item item={item} interact={false} key={uuid()} />
          ))}
        </Colors>
      </div>
    </Wrapper>
  );
};

export default Reference;

const Wrapper = styled.div`
  font-family: 'Karla';
  display: flex;
  margin: 8vh 6vw 8vh 3vw;
`;

const Title = styled.h2`
  margin: 5px 0 1rem 0;
  text-transform: uppercase;
`;

const Colors = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
