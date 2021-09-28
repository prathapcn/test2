export const formatCategories =(restaurants)=>{
    let newArr  = [];

    restaurants.forEach(r=> {
        newArr.push(...JSON.parse(r.restaurantCategory));
    });

    const categories = new Set(newArr);
    return [...categories];
}