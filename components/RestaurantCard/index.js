import React from 'react';
import styles from './RestaurantCard.module.css';

export default function RestaurantCard({ restaurant }) {
  const openStatus = restaurant.isOpen === true ? "Open Now" : "Closed";
  const statusClassName = restaurant.isOpen === true ? 'open': 'closed';

  return (
      <div className={styles.cardContainer}>
        <img 
          src={restaurant?.restaurantImage} 
          alt={restaurant?.restaurantName} 
          className={styles.restaurantImage}
        />
        <div className={styles.restaurantName}>
          <span>{restaurant?.restaurantName}</span> 
          <span className={styles[statusClassName]}>{openStatus}</span>
        </div>
        <p>{restaurant.restaurantDescription}</p>
      </div>
  )
}