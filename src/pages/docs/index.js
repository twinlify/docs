// -----------------------------------------------------------------------------

import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import styled from 'styled-components';

import Navigation from './navigation';
import {device, Markdown} from '@twinlify/walrus';

// -----------------------------------------------------------------------------

import apiMd from './api.md';
import changelogMd from './changelog.md';
import gettingStartedMd from './getting-started.md';
import usingBundlerMd from './using-bundler.md';
import usingCdnMd from './using-cdn.md';

// -----------------------------------------------------------------------------

const root = '/documentation';
const gettingStarted = '/getting-started';
const api = '/api';
const changelog = '/changelog';
const usingBundler = '/using-bundler';
const usingCdn = '/using-cdn';

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
          <Route
            path={`${path}${usingCdn}`}
            exact
            component={() => <Markdown markdown={usingCdnMd} />}
          />
          <Route
            path={`${path}${usingBundler}`}
            exact
            component={() => <Markdown markdown={usingBundlerMd} />}
          />
          <Route
            path={`${path}${changelog}`}
            exact
            component={() => <Markdown markdown={changelogMd} />}
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
  api: `${root}${api}`,
  changelog: `${root}${changelog}`,
  usingBundler: `${root}${usingBundler}`,
  usingCdn: `${root}${usingCdn}`,
  gettingStarted: `${root}${gettingStarted}`
};
