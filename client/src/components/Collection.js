import React, { useState, useEffect } from 'react';
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
    <div>
      {/* <button onClick={() => setSorted(true)}>Sort by Code</button> */}
      <Threads>
        {collectionData.reverse().map(item => (
          <Item item={item} handleDelete={handleDelete} key={uuid()} />
        ))}
      </Threads>
    </div>
  );
};

export default Collection;

const Threads = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-gap: 1.25rem;
  grid-row-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
  justify-items: center;
`;
