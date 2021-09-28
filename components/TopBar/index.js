import React from 'react';
import IconBtn from '../IconBtn';
import { useRouter } from 'next/router'
import styles from './TopBar.module.css';

export default function TopBar({
    showFilter,
    showSearch,
    showCart,
    showStore
}) {
    const router = useRouter()
    
  return (
    <div className={styles.container}>
        <div className={styles['col-4']}>
            <div className={`${styles.btn} ${styles.backBtn}`} onClick={()=>router.back()}>
                <IconBtn 
                    src="/icons/back.png"
                    color="#503E9D"
                    alt="back"
                />
            </div>
        </div>
        <div className={styles['col-8']}>
            <div className={styles.rightContent}>
                {showStore && (<div className={` ${styles.daOtto}`}>
                    <img src="/icons/store.png"></img>
                    <span>Da Otto</span>
                    <img src="/icons/switch.png"></img>
                </div>)}
                {showSearch && (
                    <div className={` ${styles.searchBar}`}>
                            <img src="/icons/search.png"></img>
                            <input type="text" placeholder="Search for Restaurants (Press Enter to search)"></input>
                    </div>
                )}
                {showFilter && (
                    <div className={` ${styles.btn} ${styles.filterBtn}`}>
                            <IconBtn 
                                src="/icons/filter.png"
                                color="#503E9D"
                                alt="filter"
                            />
                    </div>
                )}
               {showCart && (
                    <div className={` ${styles.btn} ${styles.cartBtn}`}>
                        <IconBtn 
                            src="/icons/cart.png"
                            color="#FB6D3A"
                            alt="cart"
                        />
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
