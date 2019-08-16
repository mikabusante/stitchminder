import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Wrapper>
      <Title>THREADS</Title>
      <Link href='/collection'>Your Collection</Link>
      <Link href='/reference'>Reference</Link>
      <Link href='/api/logout'>Logout</Link>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

const Link = styled.a`
  padding: 0.25rem 0;
  text-decoration: none;
  color: #212121;

  :visited {
    color: #212121;
  }

  :hover {
    font-weight: 600;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin: 0 3rem 1rem 0;
`;
