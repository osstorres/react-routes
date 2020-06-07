import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class Invoices extends Component{

    render() {
        return(
            <div> Este es el componente Invoices <Link to={'/'}> Volver a la raiz </Link> </div>
        )
    }
}