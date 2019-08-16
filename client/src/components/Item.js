import React from 'react';
import styled from 'styled-components';
import Options from './Options';
import { FiTrash } from 'react-icons/fi';

const Item = ({ interact, item, handleDelete }) => {
  return (
    <Wrapper>
      <Color hex={item.hex} />
      <Text>
        <Code>{item.code}</Code>
        <Name>{item.name}</Name>
        <Icon interact={interact} onClick={() => handleDelete(item)}>
          <FiTrash />
        </Icon>
      </Text>

      {/* <button onClick={() => handleDelete(item)}>Delete</button> */}
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.div`
  border: 2px solid #212121;
  /* margin: 2rem 1.25rem 1.25rem 0; */

  display: flex;
  flex-direction: column;
  width: 100%;

  height: 210px;
`;

const Color = styled.div`
  background: #${props => props.hex};
  width: 100%;
  min-height: 100px;
  border-bottom: 2px solid #212121;
  margin-right: 1rem;
`;

const Text = styled.div`
  padding: 1rem 2rem 2rem 1rem;
  position: relative;
`;

const Code = styled.h3`
  font-style: bold;
  padding: 0;
  font-size: 1.25rem;
  margin: 0;
`;

const Name = styled.p`
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;

const Icon = styled.div`
  position: absolute;
  right: 2px;
  top: 10px;
  padding-right: 3px;
  font-size: 15px;
  color: #c4c4c4;
  transition: color 0.25s;
  display: ${props => (props.interact === false ? `none` : `initial`)};

  :hover {
    color: #212121;
    transition: color 0.25s;
  }
`;
