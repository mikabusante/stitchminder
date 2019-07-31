import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [value, setValue] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setValue('');
    console.log('submit');

    await axios.post('/api/add-thread', { value });
  };

  return (
    <div>
      <h3>Dashboard</h3>

      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={e => setValue(e.target.value)} />
      </form>
    </div>
  );
};

export default Dashboard;
