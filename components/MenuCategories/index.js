import React from 'react';
import styles from './MenuCategories.module.css';

export default function MenuCategories({menuCategories}) {

  return (
      <div className={styles.container}>
          <ul>
              {menuCategories?.length > 0 &&  menuCategories.map((item, index)=>(
                <li key={item} className={index === 0 ? styles.active : ''}>
                    <span>{item}</span>
                </li>
              ))}
          </ul>
      </div>
  )
}