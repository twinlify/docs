import React from 'react';
import {useHistory} from 'react-router';
import styled from 'styled-components';

import {device} from '../../style/breakpoints';
import {primary} from '../../style/colors';

import {DOC_PATHS} from '../docs';

// -----------------------------------------------------------------------------

const $Cards = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const $Card = styled.a`
  border: 1px solid ${primary};
  border-radius: 5px;
  margin: 10px;
  padding: 60px;

  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    color: #ededed;
    background-color: ${primary};
  }

  transition: all 0.2s;
`;

// -----------------------------------------------------------------------------

const Intro = () => {
  const history = useHistory();

  const openGettingStarted = () => {
    history.push(DOC_PATHS.gettingStarted);
  };

  const openAPI = () => {
    history.push(DOC_PATHS.api);
  };

  const openPlatformDemo = () => {
    window.open('https://platform.twinlify.com', '__new');
  };

  return (
    <$Cards>
      <$Card onClick={openGettingStarted}>Getting Started</$Card>
      <$Card onClick={openAPI}>API Documentation</$Card>
      <$Card onClick={openPlatformDemo}>Integration demos</$Card>
    </$Cards>
  );
};

export default Intro;
