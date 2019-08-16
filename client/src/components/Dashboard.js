import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Collection from './Collection';
import AddThread from './AddThread';
import Sidebar from './Sidebar';

const Dashboard = ({ loggedIn }) => {
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
      <Sidebar loggedIn={loggedIn} />
      <Content>
        <AddThread collectionData={collectionData} setCollectionData={setCollectionData} />
        <Collection collectionData={collectionData} setCollectionData={setCollectionData} />
      </Content>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  font-family: 'Karla';
  display: flex;
  margin: 8vh 6vw 5vh 3vw;
`;

const Content = styled.div`
  margin-top: 5px;
  width: 100%;
`;
