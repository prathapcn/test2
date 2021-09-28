import React from 'react';
import styles from './MenuCard.module.css';

export default function MenuCard({ menuItem }) {
  return (
      <div className={styles.cardContainer}>
        <img 
          src={menuItem?.itemPhoto} 
          alt={menuItem?.itemName} 
          className={styles.menuItemImage}
        />
        <div className={styles.menuItemName}>
          <span>{menuItem?.itemName}</span> 
          <span>&#163;{` ${menuItem?.itemCost}`}</span>
        </div>
      </div>
  )
}