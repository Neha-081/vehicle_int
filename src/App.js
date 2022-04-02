
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { getDataSuccess } from './store/actions';
import { useDispatch } from 'react-redux';

import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import { Route, Routes } from 'react-router';
import VehicleDetail from './Components/VehicleDetail';



function App() {


  const dispatch=useDispatch()
  useEffect(()=>{
    
    const getDataVehicle=()=>{
   axios.get("https://neha-json-server.herokuapp.com/vehicle").then(({data})=>{
    //  console.log("data",data);
       dispatch(getDataSuccess(data))
       
   })
}
  
getDataVehicle()
},[dispatch])

  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path={'/'} element={<Shop/>}></Route>
        <Route path={'/vehicle/:vehicleid'} element={<VehicleDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
