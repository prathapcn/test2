const BASE_URL = 'https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1';

export const fetchRestaurants = async ()=>{
    const URL = BASE_URL + '/allRestaurants';
    try {        
        const resp = await fetch(URL).then(result => result.json());
        return {
            status: 'success',
            data: resp.allRestaurants,
        };
    } catch (error) {
        return {
            status: 'error',
            message: 'Something Went wrong'
        }
    }
};

export const fetchRestaurantById = async (restaurantId)=>{
    const URL = BASE_URL + '/restaurantDetails/' + restaurantId;
    try {        
        const resp = await fetch(URL).then(result => result.json());
        return {
            status: 'success',
            data: resp.restaurantDetail,
        };;
    } catch (error) {
        return {
            status: 'error',
            message: 'Something Went wrong'
        }
    }
}

export const fetchMenu = async ()=>{
    const URL = BASE_URL + '/menu';
    try {        
        const resp = await fetch(URL).then(result => result.json());
        return {
            status: 'success',
            data: resp.menu,
        };;
    } catch (error) {
        return {
            status: 'error',
            message: 'Something Went wrong'
        }
    }
}
