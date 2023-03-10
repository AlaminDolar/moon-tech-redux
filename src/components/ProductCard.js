import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { addToCart, removefromCart } from "../redux/actionCreators/productsAction";
import { ADD_TO_CART } from "../redux/actionTypes/actionTypes";

const ProductCard = ({ product }) => {
  const {pathname}=useLocation();
  const dispatch = useDispatch();
  return (
    <div
      className='shadow-lg rounded-3xl border relative p-3 flex flex-col text-indigo-900'
      key={product._id}
    > 
{ pathname.includes("cart") &&
  <div className="
  bg-purple-600 absolute top-2 right-2 
  grid text-white place-items-center
  rounded-full h-10 w-10 "><p>{product.quantity}</p></div>
}
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
      {!pathname.includes("cart") &&  <button onClick={()=>dispatch(addToCart(product))} className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
          Add to cart
        </button>}
     { pathname.includes("cart") &&   <button onClick={()=>dispatch(removefromCart(product))} className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
          Remove
        </button>}
       {!pathname.includes("cart") &&  <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
        >
          <BiListPlus className='text-white' />
        </button>}
      </div>
    </div>
  );
};

export default ProductCard;
