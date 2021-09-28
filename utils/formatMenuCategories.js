export const formatMenuCategories =(items)=>{
    let newArr  = ['all'];

    items.forEach(item=> {
        newArr.push(...JSON.parse(item.itemCategory));
    });

    const categories = new Set(newArr);
    return [...categories];
}