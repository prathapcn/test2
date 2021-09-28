import React from 'react';
import styles from './CategoryList.module.css';

export default function CategoryList({categories}) {
  const icons = ['burger-kng.png','Logo.png','pizza-hut.png','mcd.png']

  function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}

  return (
      <div className={styles.container}>
          <h2>Category</h2>
          <ul>
              {categories?.length > 0 &&  categories.map((item)=>(
                <li key={item}>
                    <img src={`/icons/${getRandomItem(icons)}`} alt={item}/>
                    <span>{item}</span>
                </li>   
              ))}
          </ul>
      </div>
  )
}