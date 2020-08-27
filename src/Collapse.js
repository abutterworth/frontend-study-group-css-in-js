import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TransitionReplace } from '@edx/paragon';

const Collapse = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggle}>{label}</button>
      <TransitionReplace>
        {isOpen ? (
          <div key="content">{children}</div>
        ) : (
          <div key="empty"></div>
        )}
      </TransitionReplace>
    </div>
  )
}

Collapse.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};


export default Collapse;
