import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TransitionReplace } from '@edx/paragon';
import { ReactComponent as ExpandLessIcon } from './expand-less.svg';
import { ReactComponent as ExpandMoreIcon } from './expand-more.svg';

const CollapseContainer = ({ children }) => (
  <div>
    {children}
  </div>
);

const CollapseButton = ({ children, isOpen, ...attrs }) => (
  <button
    {...attrs}
  >
    {children}
    {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
  </button>
);

const CollapseContent = ({ children, ...attrs }) => (
  <div
    {...attrs}
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
