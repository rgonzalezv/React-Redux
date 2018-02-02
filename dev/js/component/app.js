import React from 'react';
import CarList from '../containers/car-list';
import CarDetails from '../containers/car-detail';

require('../../scss/style.scss');

const App=()=>(
<div>
    <h2>Cars List</h2>
    <CarList/>
     <hr />
     <h2>Car details:</h2>
    <CarDetails/>
</div>

)
  export default App;