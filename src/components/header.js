// -----------------------------------------------------------------------------

import React, {useEffect, useState} from 'react';
import {NavLink, useHistory, useLocation} from 'react-router-dom';
import styled, {css} from 'styled-components';
import {DOC_PATHS} from '../pages/docs';
import {primary, Header as CommonHeader} from '@twinlify/walrus';

import {PATHS} from '../views';

// -----------------------------------------------------------------------------

const $NavLink = styled(NavLink)`
  &&& {
    ${props =>
      props.active &&
      css`
        background-color: ${primary};
        color: #fff;
        border-radius: 5px;
        padding: 6px 10px;
      `}
  }
`;

// -----------------------------------------------------------------------------

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const [docActive, setDocActive] = useState(false);

  useEffect(() => {
    const onDoc = location.pathname.indexOf('/documentation/') !== -1;
    setDocActive(onDoc);
  }, [location]);

  const openIntro = () => {
    if (history.location.pathname !== PATHS.intro) {
      history.push(PATHS.intro);
    }
  };

  return (
    <CommonHeader subtitle="Docs" onSubtitleClick={openIntro}>
      <NavLink exact to={PATHS.intro}>
        Intro
      </NavLink>
      <$NavLink to={DOC_PATHS.gettingStarted} active={+docActive}>
        Documentation
      </$NavLink>
      <a href="https://github.com/twinlify/docs">Github</a>
    </CommonHeader>
  );
};

// -----------------------------------------------------------------------------

export default Header;
