/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './SignOut.css';
import { signOutBtn } from './SignOut.styles';

const SignOut = ({ isClicked }) => {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.go(0);
    localStorage.clear();
  };

  if (isClicked) {
    return (
      <div className="sign-out">
        <button
          type="button"
          css={signOutBtn}
          onClick={handleClick}
        >
          Sign out
        </button>
      </div>
    );
  }
  return null;
};

export default SignOut;
