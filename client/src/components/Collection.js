import React, { useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuid';

const Collection = ({ getThreads, collectionData }) => {
  const handleDelete = async thread => {
    const res = await axios.post('/api/delete-thread', thread);
    console.log('res:', res);

    if (res.status === 200) {
      getThreads();
    }
  };

  return (
    <div>
      <p>Collection</p>
      <div>
        {collectionData.map(item => (
          <div key={uuid()}>
            <p>{item.code}</p>
            <button onClick={() => handleDelete(item)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
