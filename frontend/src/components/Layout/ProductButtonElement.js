import React,{useState,Fragment} from 'react';
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getProduct} from '../../actions/product';

const ProductButtonElement = (props) => {
    const {name,vendor,price,quantity,id,getProduct,vendorName,vendorRating}=props
    const [formData, setFormData] = useState({
        redirect:false
      });

    const onClick = e => {
        e.preventDefault();
        setFormData({redirect:true});
        getProduct(id);

    };

    if(formData.redirect)
    {
        return <Redirect to={`/customer/product/${id}`} />;
    }

    return (
        <Fragment>
            <div className='card mb-2'>
                <div className="card-header">
                    <h5>{name}
                    <button className="btn btn-secondary float-right" onClick={e => onClick(e)} >
                        Place Order
                        </button>
                    </h5>
                </div>
                <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Vendor : {vendorName}</li>
                    <li className="list-group-item">Price : {price}</li>
                    <li className="list-group-item">Quantity : {quantity}</li>
                    <li className="list-group-item">Vendor Rating : {vendorRating}</li>
                </ul>
                </div>
            </div>    
        </Fragment> 
    )
}
ProductButtonElement.propTypes = {
    getProduct: PropTypes.func.isRequired
};
export default connect(null,{getProduct})(ProductButtonElement);

 
