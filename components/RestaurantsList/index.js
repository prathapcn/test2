import React, { Fragment } from 'react';
import RestaurantCard from '../RestaurantCard';
import styles from './RestaurantsList.module.css';

export default function RestaurantsList({ data, onRestaurantSelect }) {
  return (
      <div className={styles.container}>
          <h2>Restaurants</h2>
            <div className={styles.list}>
              {data?.length > 0 &&  data.map(item => (
                <div key={item.id} onClick={()=>onRestaurantSelect(item.id)}>
                  <RestaurantCard restaurant={item}/>
                </div>
              ))}
            </div>
      </div>
  )
}