import React, {Component} from "react";

export default class Prueba extends Component{

    handleClick = () =>{
        const { history } = this.props
        history.push('/invoices')
    }

    render() {
        return <div onClick={this.handleClick}> Este es el compoenente prueba  </div>


    }
}