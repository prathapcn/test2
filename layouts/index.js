import React from 'react';
import Sider from './sidermenu';
import styles from '../styles/Layout.module.css';

export default function Layout({children}) {
  return (
      <div className={styles.container}>
          <div className={styles.sider}>
              <Sider />
          </div>
          <div className={styles.main}>
            {children}
          </div>
      </div>
  )
}
