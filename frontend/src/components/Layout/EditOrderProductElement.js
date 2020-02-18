import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const EditOrderProductElement = (props) => {
    const {name,vendor,price,quantity,id,state}=props
    return (
        <Fragment>
            <div className='card mb-2'>
                <div className="card-header">
                    <h5>{name}</h5>
                </div>
                <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Vendor : {vendor}</li>
                    <li className="list-group-item">Price : {price}</li>
                    <li className="list-group-item">Quantity : {quantity}</li>
                    <li className="list-group-item">Status : {state}
                    { state==="waiting" && <Link to={`/customer/product/edit/${id}`}  className="btn btn-secondary float-right">Edit order</Link>}
                    { state==="dispatched" && <Link to={`/customer/product/review/${id}`}  className="btn btn-secondary float-right">Review order</Link>}
                    { state==="placed" && <Link to={`/customer/vendor/rate/${id}`}  className="btn btn-secondary float-right">Rate Vendor</Link>}
                    </li>
                </ul>
                </div>
            </div>    
        </Fragment> 
    )
}
export default EditOrderProductElement;

 
