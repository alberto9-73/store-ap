import {getProductById , getProduct } from "./store/storesProduct";
const listadoProducts=await getProduct();
console.log(listadoProducts.map((p)=>p.title));
const products= await getProductById(2);
console.log(products);

