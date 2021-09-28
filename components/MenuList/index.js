import React, { Fragment } from 'react';
import MenuCard from '../MenuCard';
import styles from './MenuList.module.css';

export default function MenuList({ data }) {
  return (
      <div className={styles.container}>
          <h2>Menu</h2>
            <div className={styles.list}>
              {data?.length > 0 &&  data.map(item => (
                <Fragment key={item.id}>
                  <MenuCard menuItem={item}/>
                </Fragment>
              ))}
            </div>
      </div>
  )
}