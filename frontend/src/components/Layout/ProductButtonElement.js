import React,{Fragment} from 'react';

const ProductButtonElement = (props) => {
    const {name,vendor,price,quantity,id}=props
    return (
        <Fragment>
            <div className='card mb-2'>
                <div className="card-header">
                    <h5>{name}
                    <a className="btn btn-secondary float-right" href={`/customer/product/${id}`}>Place Order</a>
                    </h5>
                </div>
                <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Vendor : {vendor}</li>
                    <li className="list-group-item">Price : {price}</li>
                    <li className="list-group-item">Quantity : {quantity}</li>
                </ul>
                </div>
            </div>    
        </Fragment> 
    )
}
export default ProductButtonElement;

 
