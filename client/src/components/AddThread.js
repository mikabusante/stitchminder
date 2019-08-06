import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AddThread = ({ setCollectionData }) => {
  const [value, setValue] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setValue('');

    const res = await axios.post('/api/add-thread', { code: value });
    setCollectionData(res.data);
  };

  return (
    <div>
      <Title>Your Collection</Title>
      <form onSubmit={handleSubmit}>
        <Label>Add Thread</Label>
        <InputWrapper>
          <Input type='text' value={value} onChange={e => setValue(e.target.value)} />
          <Button>Add</Button>
        </InputWrapper>
      </form>

      <Divider />
    </div>
  );
};

export default AddThread;

const Divider = styled.hr`
  border: none;
  color: #212121;
  background-color: #212121;
  height: 1px;
  width: 60vw;
`;

const Title = styled.h2`
  margin: 0 0 1rem 0;
  text-transform: uppercase;
`;

const Label = styled.label`
  font-size: 1.3rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.25rem 0 2rem 0;
`;

const Input = styled.input`
  box-sizing: border-box;
  height: 3rem;
  border: 1px solid #212121;
  margin-right: 0.5rem;
  font-size: 2rem;
  width: 6ch;
  padding: 0 0.25rem;
  font-family: monospace;
`;

const Button = styled.button`
  box-sizing: border-box;
  background-color: #212121;
  color: white;
  border: none;
  height: 3rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 300;
  padding: 0 0.75rem;

  :hover {
    opacity: 0.85;
  }
`;
