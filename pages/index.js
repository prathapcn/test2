import React, { Fragment,useEffect, useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import styles from '../styles/Restaurants.module.css';
import TopBar from '../components/TopBar';
import CategoryList from '../components/CategoryList';
import RestaurantsList from '../components/RestaurantsList';
import { fetchRestaurants } from '../services/api-methods';
import { formatCategories } from '../utils/formatCategories';

export default function Restaurants() {
  
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [errorWhileFetching, setErrorWhileFetching] = useState(false);

  useEffect(()=>{
    fetchRestaurants().then(response=>{
      if(response?.status === 'success'){
        setRestaurantsData(response.data);
      }else{
        setErrorWhileFetching(response.message)
      }
    })
  },[])
  const categories = formatCategories(restaurantsData);

  const onRestaurantSelect =(restId)=>{
    Router.push(`/restaurants/${restId}`);
  };

  return (
    <Fragment>
      <Head>
        <title>Restaurants</title>
      </Head>
      <div className={styles.restaurantsContainer}>
        <TopBar 
          showCart
          showFilter
          showSearch
          showStore
        />
        <CategoryList categories={categories} />
        {errorWhileFetching === false ? 
          (<RestaurantsList data={restaurantsData} onRestaurantSelect={onRestaurantSelect}/>): 
          errorWhileFetching
        }
      </div>
    </Fragment>
  )
}
