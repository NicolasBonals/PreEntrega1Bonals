import axios from "axios";
/**
 * @name getProducts 
 * @description get products form dummyjson
 * @param {number} limit @default limit = 8
 * @returns {Promise}
 */
export async function getCategories(){
    
    return await axios.get(`https://dummyjson.com/products/categories`)
}