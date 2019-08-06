import React from 'react';
import axios from 'axios';
import uuid from 'uuid';

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
