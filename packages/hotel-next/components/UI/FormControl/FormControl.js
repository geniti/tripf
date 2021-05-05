import React from 'react';
import PropTypes from 'prop-types';
import HtmlLabel from '../HtmlLabel/HtmlLabel';
import Wrapper from './FormControl.style';

const FormControl = ({
  className,
  label,
  labelTag,
  htmlFor,
  children,
  error,
}) => {
  const addAllClasses = ['form-control'];
  if (error) {
    addAllClasses.push('has-error');
  }
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <Wrapper className={addAllClasses.join(' ')}>
      {label && (
        <HtmlLabel
          className="field-label"
          as={labelTag}
          htmlFor={htmlFor}
          content={label}
        />
      )}
      {children}
      {error && <div className="feedback">{error}</div>}
    </Wrapper>
  );
};

FormControl.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  labelTag: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.any,
};

export default FormControl;
