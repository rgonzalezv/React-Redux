import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectCar} from '../actions/index';

class CarList extends Component {

    createListItems(){
        return this.props.cars.map((car)=>{
            return(
                <li key={car.id}
                    onClick={()=> this.props.selectCar(car)}>
                    {car.model} - {car.year}
                    </li>
            );
        })
    }

    render(){
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )}
}

function mapStateToProps(state){
    return{
        cars: state.cars
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectCar : selectCar},dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps)(CarList)