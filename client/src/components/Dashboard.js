import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Collection from './Collection';

const Dashboard = () => {
  const [value, setValue] = useState('');
  const [collectionData, setCollectionData] = useState([]);

  const getThreads = async () => {
    // eslint-disable-next-line
    const res = await axios.get('/api/threads');

    setCollectionData(res.data);
  };

  useEffect(() => {
    getThreads();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    setValue('');

    await axios.post('/api/add-thread', { code: value });

    getThreads();
  };

  return (
    <div>
      <h3>Dashboard</h3>

      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={e => setValue(e.target.value)} />
      </form>

      <Collection collectionData={collectionData} getThreads={getThreads} />
    </div>
  );
};

export default Dashboard;
