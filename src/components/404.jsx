import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.h1`
  font-weight: bolder;
`;

const FourOhFour = () => (
  <Wrapper>
    <Message>404</Message>
  </Wrapper>
);

export default FourOhFour;
