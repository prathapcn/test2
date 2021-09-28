import React, { Fragment,useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import styles from '../../styles/RestaurantDetails.module.css';
import TopBar from '../../components/TopBar';
import RestaurantsDetails from '../../components/RestaurantsDetails';
import MenuCategories from '../../components/MenuCategories';
import MenuList from '../../components/MenuList';
import { fetchRestaurantById,fetchMenu } from '../../services/api-methods';
import { formatMenuCategories } from '../../utils/formatMenuCategories';

export default function Details() {
  const router = useRouter()
  const { rid } = router.query;

  const [restaurantData, setRestaurantData] = useState({});
  const [menuData, setMenuData] = useState([]);
  const [errorWhileFetching, setErrorWhileFetching] = useState(false);
  
  useEffect(()=>{
    // fetch restaurent details
    fetchRestaurantById(rid).then(response=>{
      if(response?.status === 'success'){
        setRestaurantData(response.data);
      }else{
        setErrorWhileFetching(response.message)
      }
    });

    // Fetch Menu data
    fetchMenu().then(menuResponse =>{
        if(menuResponse?.status === 'success'){
            setMenuData(menuResponse.data);
        }else{
            setErrorWhileFetching(menuResponse.message)
        }
    });
  },[rid]);


  const menuCategories = formatMenuCategories(menuData);

  return (
    <Fragment>
    <Head>
      <title>Restaurant - {restaurantData?.restaurantName}</title>
    </Head>
    <div className={styles.restaurantDetailsContainer}>
      <TopBar showCart />
        {errorWhileFetching === false ? (
            <>
            <RestaurantsDetails restaurant={restaurantData}/>
            <hr className={styles.hr}/>
            <MenuCategories menuCategories={menuCategories} />
            <MenuList data={menuData}/>
            </>
        ): errorWhileFetching }      
    </div>
  </Fragment>
  )
};