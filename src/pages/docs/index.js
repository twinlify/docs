// -----------------------------------------------------------------------------

import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import styled from 'styled-components';

import Navigation from './navigation';
import {device, Markdown} from '@twinlify/walrus';

// -----------------------------------------------------------------------------

import gettingStartedMd from './getting-started.md';
import apiMd from './api.md';

// -----------------------------------------------------------------------------

const root = '/documentation';
const gettingStarted = '/getting-started';
const api = '/api';

// -----------------------------------------------------------------------------

const $View = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
`;

const $DocView = styled.div`
  width: 100%;

  @media ${device.tablet} {
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
  }
`;

// -----------------------------------------------------------------------------

const Documentation = props => {
  const {path} = props.match;
  return (
    <$View>
      <Navigation />
      <$DocView>
        <Switch>
          <Route
            path={`${path}${gettingStarted}`}
            exact
            component={() => <Markdown markdown={gettingStartedMd} />}
          />
          <Route
            path={`${path}${api}`}
            exact
            component={() => <Markdown markdown={apiMd} />}
          />
          <Route exact path={path}>
            <Redirect to={`${path}${gettingStarted}`} />
          </Route>
        </Switch>
      </$DocView>
    </$View>
  );
};

// -----------------------------------------------------------------------------

export default Documentation;

export const DOC_PATHS = {
  gettingStarted: `${root}${gettingStarted}`,
  api: `${root}${api}`
};
