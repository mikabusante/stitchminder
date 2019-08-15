import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import colors from '../dmc-scraper/colors.json';

const AddThread = ({ collectionData, setCollectionData }) => {
  const [value, setValue] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [existing, setExisting] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (value === '') return;

    const existingThread = collectionData.find(thread => thread.code === value);

    if (existingThread) {
      setNotFound(false);
      setExisting(true);
      return;
    } else {
      setExisting(false);
    }

    const thread = colors.filter(color => color.code === value);

    if (thread.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);

      let name = thread[0].name;
      let hex = thread[0].hex;
      let hsl = thread[0].hsl;
      const res = await axios.post('/api/add-thread', { code: value, name, hex, hsl });

      setCollectionData(res.data);
      setValue('');
    }
  };

  return (
    <Wrapper>
      <Title>Your Collection</Title>
      <form onSubmit={handleSubmit}>
        <Label>Add Thread</Label>
        <InputWrapper>
          <Input
            notFound={notFound}
            existing={existing}
            type='text'
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <Button>Add</Button>
          <Warning notFound={notFound}>
            Sorry, code not found. Please enter a valid DMC number.
          </Warning>

          <Warning existing={existing}>
            This thread has already been added to your collection.
          </Warning>
        </InputWrapper>
      </form>

      <Divider />
    </Wrapper>
  );
};

export default AddThread;

const Wrapper = styled.div`
  width: 100%;
`;

const Divider = styled.hr`
  border: none;
  color: #212121;
  background-color: #212121;
  height: 1px;
  width: 100%;
`;

const Title = styled.h2`
  margin: 0 0 1rem 0;
  text-transform: uppercase;
`;

const Label = styled.label`
  font-size: 1.3rem;
  line-height: 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.25rem 0 2rem 0;
`;

const Input = styled.input`
  box-sizing: border-box;
  height: 3rem;
  border: ${props => (props.existing || props.notFound ? '1px solid red' : '1px solid #212121')};
  margin-right: 0.5rem;
  font-size: 2rem;
  width: 6ch;
  padding: 0 0.25rem;
  font-family: monospace;

  :focus {
    outline: 0;
  }
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

  :focus {
    outline: 0;
  }
`;

const Warning = styled.div`
  border: 1px solid #212121;
  padding: 0.5rem;
  width: 30%;
  font-style: italic;
  display: ${props => (props.notFound || props.existing ? 'initial' : 'none')};
  margin-left: 2rem;
  font-size: 0.8rem;
  min-width: 15ch;
  max-width: max-content;
`;
