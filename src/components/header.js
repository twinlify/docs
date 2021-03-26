// -----------------------------------------------------------------------------

import React, {useEffect, useState} from 'react';
import {NavLink, useHistory, useLocation} from 'react-router-dom';
import styled, {css} from 'styled-components';
import {DOC_PATHS} from '../pages/docs';
import {device} from '../style/breakpoints';
import {primary} from '../style/colors';

import {PATHS} from '../views';

// -----------------------------------------------------------------------------

const $HeaderWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #ededed;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

const $Header = styled.div`
  max-width: 1300px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  position: relative;
  text-align: left;
  align-items: center;

  @media ${device.tablet} {
    font-size: 30px;
  }
`;

const $Logo = styled.img`
  height: 42px;
  margin-right: 10px;
  border: 1px solid;
  border-radius: 50%;
  padding: 2px;
  box-sizing: border-box;
`;

const $Title = styled.div`
  color: ${primary};
  font-size: 19px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;

    &:hover {
      color: inherit;
    }
  }

  @media ${device.tablet} {
    font-size: 30px;
  }
`;

const $Name = styled.span``;

const $Subtitle = styled.span`
  font-size: 22px;
  font-weight: bold;
  margin-left: 10px;
  padding-left: 10px;
  border-left: 3px solid ${primary};
  visibility: hidden;

  @media ${device.tablet} {
    visibility: visible;
  }
`;

const $Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;

  @media ${device.tablet} {
    font-size: 17px;
  }

  a {
    color: ${primary};
    font-weight: 500;
    text-decoration: none;
    padding: 0 10px;

    &:hover {
      color: #444;
    }

    &.active {
      background-color: ${primary};
      color: #fff;
      border-radius: 5px;
      padding: 6px 10px;
    }
  }
`;

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
    <$HeaderWrapper>
      <$Header>
        <$Title onClick={openIntro}>
          <a href="https://twinlify.com" target="__blank">
            <$Logo src="https://static.twinlify.com/logos/logo-square.svg" />
            <$Name>Twinlify</$Name>
          </a>
          <$Subtitle>Docs</$Subtitle>
        </$Title>
        <$Links>
          <NavLink exact to={PATHS.intro}>
            Intro
          </NavLink>
          <$NavLink to={DOC_PATHS.gettingStarted} active={+docActive}>
            Documentation
          </$NavLink>
          <a href="https://github.com/twinlify" target="__new">
            Github
          </a>
        </$Links>
      </$Header>
    </$HeaderWrapper>
  );
};

// -----------------------------------------------------------------------------

export default Header;
