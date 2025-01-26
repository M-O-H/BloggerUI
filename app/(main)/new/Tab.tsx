import React from 'react';
import styles from './Tab.module.css';
import { TabProps } from './types';

export const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`${styles.tab} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      tabIndex={0}
      role="tab"
      aria-selected={isActive}
    >
      {label}
    </button>
  );
};
