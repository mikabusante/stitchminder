import React from 'react';
import axios from 'axios';
import uuid from 'uuid';
import styled from 'styled-components';

import Item from './Item';

const Collection = ({ setCollectionData, collectionData }) => {
  const handleDelete = async thread => {
    const res = await axios.post('/api/delete-thread', thread);
    console.log('res:', res);

    if (res.status === 200) {
      setCollectionData(res.data);
    }
  };

  return (
    <Wrapper>
      {collectionData.reverse().map(item => (
        <Item item={item} handleDelete={handleDelete} key={uuid()} />
      ))}
    </Wrapper>
  );
};

export default Collection;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
