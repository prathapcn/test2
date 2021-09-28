import React from 'react';
import styles from '../styles/Sidermenu.module.css';
import Link from 'next/link';

export default function SiderMenu() {

    const menuItems = [
        {
            icon: '/icons/home.png',
            title: 'Home',
        },
        {
            icon: '/icons/orders.png',
            title: 'Orders',
        },
        {
            icon: '/icons/mail.png',
            title: 'Notification',
        },
        {
            icon: '/icons/question-mark.png',
            title: 'Help & Support',
        },
        {
            icon: '/icons/setting.png',
            title: 'Settings',
        },
    ];

  return (
      <div className={styles.container}>
          <div className={styles.appTitle}>
              <Link href="/restaurants">
                  <a>
                    <img src="/app-logo.png"></img>
                    <span>Promo &amp; co</span>
                  </a>
              </Link>
          </div>
          <nav className={styles.navMenu}>
              <ul>
                  {menuItems.map((item, index)=>(
                      <li key={item.title} className={index === 0 ? styles.menuActive : ''}>
                          <img src={item.icon} alt={item.title}/>
                          <span>{item.title}</span>
                      </li>
                  ))}
              </ul>
          </nav>
          <div className={styles.user}>
                <div>
                    <span>Mark Clarke</span>
                    <span>mark@gmail.com</span>
                </div>
                <div>
                    <img src="/icons/switch.png" alt="account"></img>
                </div>
          </div>
      </div>
  )
}
