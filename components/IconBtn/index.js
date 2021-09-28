import React from 'react';
import styles from './IconBtn.module.css';

export default function IconBtn({src,alt, color}) {
    return (
        <div className={styles.button} style={{
            backgroundColor: color,
        }}>
            <img src={src} alt={alt}></img>
        </div>
    )
}