import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TransitionReplace } from '@edx/paragon';
import { ReactComponent as ExpandLessIcon } from './expand-less.svg';
import { ReactComponent as ExpandMoreIcon } from './expand-more.svg';

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const CollapseContainer = ({ children }) => (
  <div>
    {children}
  </div>
);

const CollapseButton = ({ children, isOpen, ...attrs }) => (
  <button
    css={css`
      width: 100%;
      text-align: left;
      border-radius: 7px;
      border: solid 1px black ;
      background: black;
      color: white;
      display: flex;
      padding: .5rem .5rem .5rem 1rem;
      &:hover {
        background: #444;
      }
      &:focus {
        outline: none;
        box-shadow: 0 0 0px 2px blue, inset 0 0 0 1px white;
      }
      &[aria-expanded="true"] {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    `}
    {...attrs}
    aria-expanded={isOpen}
  >
    <span css={css`flex-grow: 1`}>{children}</span>
    {isOpen ?
      <ExpandLessIcon css={css`fill: currentColor`} />
      : <ExpandMoreIcon css={css`fill: currentColor`} />}
  </button>
);

const CollapseContent = ({ children, ...attrs }) => (
  <div
    {...attrs}
    css={css`
      padding: 1rem;
      border: solid 1px black;
      border-top: none;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    `}
  >
    {children}
  </div>
);

const Collapse = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <CollapseContainer>
      <CollapseButton isOpen={isOpen} onClick={toggle}>{label}</CollapseButton>
      <TransitionReplace>
        {isOpen ? (
          <CollapseContent key="content">{children}</CollapseContent>
        ) : (
          <div></div>
        )}
      </TransitionReplace>
    </CollapseContainer>
  )
}

Collapse.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};


export default Collapse;
