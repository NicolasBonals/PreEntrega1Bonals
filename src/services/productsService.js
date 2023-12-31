import axios from "axios";
/**
 * @name getProducts 
 * @description get products form dummyjson
 * @param {number} limit @default limit = 8
 * @returns {Promise}
 */
export async function getProducts(limit = 8){
    
    return await axios.get(`https://dummyjson.com/products?limit=${limit}`)
}

/**
 * @name getProductsById 
 * @description get a product form dummyjson by its Id
 * @returns {Promise}
 */
export async function getProductById(id){
    
    return await axios.get(`https://dummyjson.com/products/${id}`)
}


/**
 * @name getProductsByCategory 
 * @description get products form dummyjson by categories
 * @returns {Promise}
 */
export async function getProductByCategory(category){
    
    return await axios.get(`https://dummyjson.com/products/category/${category}`)
}