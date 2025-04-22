import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Optional CSS/SCSS styling

const Button = ({
  type = 'button',
  onClick,
  children,
  className = '',
  disabled = false,
  loading = false,
  icon: Icon,
  variant = 'primary', // 'primary' | 'secondary' | 'danger' | etc.
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`custom-btn ${variant} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <span className="spinner" />
      ) : (
        <>
          {Icon && <Icon className="btn-icon" />}
          {children}
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.elementType,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success'])
};

export default Button;
