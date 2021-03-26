// -----------------------------------------------------------------------------

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

import Intro from './pages/intro';
import Documentation from './pages/docs';
import {device} from './style/breakpoints';

// -----------------------------------------------------------------------------

const $View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 0px 5px;
  min-height: calc(100vh - 120px);

  @media ${device.tablet} {
    padding: 0px 30px;
  }
`;

// -----------------------------------------------------------------------------

const intro = '/';
const documentation = '/documentation';

// -----------------------------------------------------------------------------

const Views = () => (
  <$View>
    <Switch>
      <Route path={intro} exact component={Intro} />
      <Route path={documentation} component={Documentation} />
    </Switch>
  </$View>
);

// -----------------------------------------------------------------------------

export default Views;

export const PATHS = {
  intro,
  documentation
};
