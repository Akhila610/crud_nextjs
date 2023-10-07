// components/Layout.js
import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      {/* Background image */}
      <div className={styles.backgroundImage}></div>
      {/* Page content */}
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
