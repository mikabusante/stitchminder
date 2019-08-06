import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Collection from './Collection';
import AddThread from './AddThread';

const Dashboard = () => {
  const [collectionData, setCollectionData] = useState([]);

  useEffect(() => {
    const getThreads = async () => {
      // eslint-disable-next-line
      const res = await axios.get('/api/threads');
      setCollectionData(res.data);
    };

    getThreads();
  }, []);

  return (
    <Wrapper>
      <Sidebar>
        <Title>THREADS</Title>
        <Link href='/'>Collection</Link>
        <Link href='/'>Reference</Link>
        <Link href='/api/logout'>Logout</Link>
      </Sidebar>

      <Content>
        <AddThread setCollectionData={setCollectionData} />
        <Collection collectionData={collectionData} setCollectionData={setCollectionData} />
      </Content>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  font-family: 'Karla';
  display: flex;
  margin-top: 8vh;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

const Link = styled.a`
  padding: 0.25rem 0;
  text-decoration: none;

  :visited {
    color: black;
  }

  :hover {
    font-weight: 600;
  }
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin: 0 3rem 1rem 0;
`;

const Content = styled.div`
  margin-top: 5px;
`;
