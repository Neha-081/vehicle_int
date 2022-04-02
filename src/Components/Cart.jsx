import React from 'react';
import { useSelector } from 'react-redux';
import "../styles/shop.css";
import { addCartData } from '../store/cartReducer/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { historyCartData } from '../store/orderHistory/actions';

function Cart() {
    const { cart } = useSelector((store) => ({ ...store }));
//   console.log("cart====",cart);
const dispatch=useDispatch()
const navigate=useNavigate()

const handleRemove = (id) => {
    let filArr = cart.filter(item => item.id !== id)
    localStorage.setItem("vehicleData", JSON.stringify(filArr))
    dispatch(addCartData(filArr))
    // console.log(filArr);
  }

  let total=cart.reduce((curr,el)=>{
      return curr += Number(el.price)
  },0)

  const buyCheck=()=>{

if (typeof window != undefined) {
    if (localStorage.getItem("vehicleData")) {
      let myOrderData = JSON.parse(localStorage.getItem("vehicleData"))
    //   let newOrderData=localStorage.setItem("orderData",JSON.stringify(myOrderData))
      dispatch(historyCartData(myOrderData))
      localStorage.setItem("vehicleData", JSON.stringify([]))
    }
  }
  dispatch(addCartData([]))
//   toast.success("Payment Successful")
alert("Payment Successfull")

  setTimeout(() => {
    navigate("/")
  }, 3000)

  }
  return (
    <div>
        <h1>My Cart</h1>
        <table className="table">
        <thead>

        </thead>
        <tbody>



        <tr className='carthead'>
            <td>Shop Name</td>
            <td>Price</td>
            <td>Discounts</td>
            <td>Street Name</td>
            <td>Street Address</td>
            <td>Vehicle</td>
            <td>Remove</td>
        </tr>
          {cart.map((e) => (
            <tr key={e.id}>
              <td>{e.shopName}</td>
              <td className="price" >₹{e.price}</td>
              <td className="price" >{Math.abs(e.radius[0])}%</td>
              <td className="price" >{e.streetName}</td>
              <td className="price" >{e.streetAddress}</td>
              <td className="price" >{e.vehicle}</td>
              <td style={{ cursor: "pointer" }} onClick={() => handleRemove(e.id)} className="remove">X</td>
            </tr>
          ))}


        </tbody>
      </table>
      <h2 className='lead fw-bold' >Total Amount : <span id="pricep">₹ {total}</span></h2>
      <button className='btn btn-primary float-end' id="buybtn" onClick={buyCheck} disabled={cart.length === 0}>
        Buy Now </button>
    </div>
  )
}

export default Cart