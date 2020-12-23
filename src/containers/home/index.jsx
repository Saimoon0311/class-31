import React from 'react'
import './style.css';
import {connect} from 'react-redux'
import {set_data,facebookligin } from '../../store/action'
// import Home from ''

class Home extends React.Component {
    // static getDrivedStateFromProps (props,state){
    //     console.log
    //     return{

    //     }
    // }
render(){
    return(
        <div>
            <h1>Home</h1>
            <button onClick={()=>this.props.facebookligin()}>facebook login</button>
        </div>
    )
}
}
const mapStateToProps = (state)=>({
user : state.user
})

const mapDispatchToProps =(dispatch) => ({
    set_data: (data) => dispatch(set_data(data)),
    facebookligin: (data) => dispatch(facebookligin()),
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);
