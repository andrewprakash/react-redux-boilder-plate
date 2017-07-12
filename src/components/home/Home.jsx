import React from 'react';
import { connect } from 'react-redux';
import {getIndex} from "../../actions/indexActions.js"

@connect((store) =>{
    return {
        index: store.index
    }
})
class Home extends React.Component{
    
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.dispatch(getIndex())
    }
    componentWillUnmount(){
    }
    render(){
        return(
            <div id="home">
                {this.props.index.index}
            </div>
        )
    }
}
module.exports = Home;