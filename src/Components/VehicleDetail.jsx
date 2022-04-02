import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


const VehicleDetail=()=>{
    const {  data } = useSelector((store) => store.vehicle);
    const {vehicleid}=useParams()
    const viewSingleData = data.filter((item) => Number(item.id) == Number(vehicleid));
    console.log(viewSingleData);


    return (
        <div>
            <h2>SHOP DETAIL</h2>
            <div id='main'>
{
    viewSingleData.map(e=>(
      <div className="card" style={{width:"600px",fontSize:"20px",backgroundColor:"wheat"}} key={e.id}>

  <h4 className='shopname'>{e.shopName.toUpperCase()}</h4> 
  <p><span className='type'>Street :</span> {e.streetName}</p>
  <p><span className='type'>Address :</span> {e.streetAddress}</p>
  <p><span className='type'>Radius :</span> {Math.abs(e.radius[1])} </p>
  <p><span className='type'>Vehicle :</span> {e.vehicle}</p>
  <p><span className='type'>Model :</span> {e.model}</p>
  <p><span className='type'>Payments :</span> {e.payments}</p>
  <p><span className='type'>Product :</span> {e.product}</p>
  <p><span className='type'>Direction :</span> {e.radiuss}</p>
  <p><span className='type'>Type :</span> {e.type}</p>
  <p><span className='type'>Discounts :</span> {Math.abs(e.radius[0])} %</p>
  <p><span className='type'>Online Payment : </span>{e.id%2==0 ? "Available" : "Unavailable"}</p>
  {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
  <div className="card-body">
    <h5 className="card-title"><span className='type'>Price Charge : </span>₹{e.price}</h5>
    <Link to={`/vehicle/${e.id}`} className="btn btn-primary">Add to Cart</Link>
  </div>
</div>
    ))
  }

</div>
        </div>
    )
  
}

export default VehicleDetail;