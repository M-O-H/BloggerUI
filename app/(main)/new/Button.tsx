import React from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'secondary',
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
      tabIndex={0}
    >
      {children}
    </button>
  );
};
