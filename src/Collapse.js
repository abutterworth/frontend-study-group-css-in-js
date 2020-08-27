import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TransitionReplace } from '@edx/paragon';

const CollapseContainer = ({ children }) => (
  <div>
    {children}
  </div>
);

const CollapseButton = ({ children, ...attrs }) => (
  <button
    {...attrs}
  >
    {children}
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
      <CollapseButton onClick={toggle}>{label}</CollapseButton>
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
