import React from 'react';
import styles from './RestaurantsDetails.module.css';

export default function RestaurantsDetails({ restaurant }) {
  return (
      <div className={styles.container}>
        <div className={styles.details}>
            <h1>{restaurant?.restaurantName}</h1>
            <p>{restaurant?.restaurantDescription}</p>
            <div>
                <img src="/icons/clock-grey.png" alt="Timings"></img>
                <span className={styles.openingHours}>{restaurant?.openingHours}</span>
            </div>
            <div>
                <img src="/icons/call.png" alt="Contact"></img>
                <span>{restaurant?.contactNumber}</span>
            </div>
            <div>
                <img src="/icons/globe.png" alt="Website"></img>
                <span>
                    {restaurant?.websiteUrl 
                    && <a href={restaurant?.websiteUrl} target="_blank">{restaurant?.websiteUrl}</a>}
                </span>
            </div>
        </div>
        <div className={styles.image}>
            <img 
            src={restaurant?.restaurantImage} 
            alt={restaurant?.restaurantName} 
            className={styles.restaurantImage}
            />
        </div>
      </div>
  )
}