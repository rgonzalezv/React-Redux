import React,{Component} from 'react';
import {connect} from 'react-redux';


class carDetail extends Component{
    render(){
        if(!this.props.car){
        return (<h4>select car</h4>);
    }
        return(
            <div>
                <img src={this.props.car.thumbnail} />
            </div>
        );
    }

}
function mapStateToProps(state){
    return{
        car: state.activeCar
    };
}

export default connect(mapStateToProps)(carDetail);