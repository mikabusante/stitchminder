import React, { useState } from 'react';
import styled from 'styled-components';

const Options = () => {
  const [open, setOpen] = useState(true);
  return (
    <Wrapper open={open}>
      <p>Options</p>
    </Wrapper>
  );
};

export default Options;

const Wrapper = styled.div`
  display: ${props => (props.open ? `initial` : `none`)};
  border: 2px solid #212121;
  position: absolute;
  background: white;
  z-index: 200;
  right: -420%;
`;
