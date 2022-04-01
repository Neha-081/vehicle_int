import React, { useState } from 'react';
import data from '../data.json';
import './shop.css'
// console.log(data);



function Shop() {
  console.log(data);

  let [newData,setNewData]=useState();
  // setNewData(data);
  // console.log("new",newData);

const handleRadius=()=>{
setNewData(()=>{
  return [...data.sort((a,b)=>{
    return +a.radius[1] - +b.radius[1]
  })]
})
}

const handlePrice=()=>{
  setNewData(()=>{
    return [...data.sort((a,b)=>{
      return +a.price - +b.price
    })]
  })
  }


const handleDiscount=()=>{
  setNewData(()=>{
    return [...data.sort((a,b)=>{
      return +b.radius[0] - +a.radius[0]
    })]
  })
  }


const onlinePayment=()=>{
  setNewData(()=>{
    return [...data.filter((a)=>{
          
      return a.id=2
      
    })]
  })
  }
  

  const handleAll=()=>{
    setNewData(()=>{
      return [...data.sort((a,b)=>{
        return +a.shopName.split(" ")[1] - +b.shopName.split(" ")[1]
      })]
    })
    }



  return (
    <div>
<h1>SHOP PAGE</h1>

<div className='sort'>
  <h3>Filter By :</h3>
  <button onClick={()=>handleAll()}>All shops</button>
  <button onClick={()=>handleRadius()}>Radius</button>
  <button onClick={()=>onlinePayment()}>Online Payment</button>
  <button onClick={()=>handlePrice()}>Price</button>
  <button onClick={()=>handleDiscount()}>Discounts</button>
</div>


<div id='main'>
{
    data.map(e=>(
      <div className="card" key={e.id}>

  <h4>Shop Name : {e.shopName}</h4> 
  <p><span className='type'>Street :</span> {e.streetName}</p>
  <p><span className='type'>Address :</span> {e.streetAddress}</p>
  <p><span className='type'>Radius :</span> {Math.abs(e.radius[1])} </p>
  <p><span className='type'>Vehicle :</span> {e.vehicle}</p>
  <p><span className='type'>Discounts :</span> {Math.abs(e.radius[0])} %</p>
  <p><span className='type'>Online Payment : </span>{e.id%2==0 ? "Available" : "Unavailable"}</p>
  {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
  <div className="card-body">
    <h5 className="card-title"><span className='type'>Price Charge : ₹</span>{e.price}</h5>
    <a href="#" className="btn btn-primary">Proceed</a>
  </div>
</div>
    ))
  }

</div>


    </div>
  )
}

export default Shop