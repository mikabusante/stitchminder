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

        <Login>
          Start your collection.
          <a href='/auth/google'>Log in with Google</a>
        </Login>
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
  width: 100%;
`;

const Title = styled.h2`
  margin: 5px 0 1rem 0;
  text-transform: uppercase;
`;

const Login = styled.div`
  height: min-content;
  border: 2px solid #212121;
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 2rem;
  padding: 2rem;
  margin-bottom: 2rem;
  a {
    color: #212121;
    margin-left: 20px;
    :visited {
      color: #212121;
    }
  }
`;

const Colors = styled.div`
  width: 70vw;
  display: grid;
  grid-gap: 1.25rem;
  grid-row-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
  justify-items: center;
`;
