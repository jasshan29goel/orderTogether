import React,{Fragment} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { cancelProduct} from '../../actions/product';
const VendorProductElement = (props) => {
    const {name,price,quantity,id,cancelProduct}=props;

    const onClick1 = e => {
        e.preventDefault();
        cancelProduct(id);
    };
    return (
        <Fragment>
            <div className='card mb-2'>
                <div className="card-header">
                    <h5>{name}
                    <button className="btn btn-secondary float-right" onClick={e => onClick1(e)}>Cancel</button>
                    </h5>
                </div>
                <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price : {price}</li>
                    <li className="list-group-item">Quantity : {quantity}</li>
                </ul>
                </div>
            </div>    
        </Fragment> 
    )
}
VendorProductElement.propTypes = {
    cancelProduct: PropTypes.func.isRequired,
};
export default connect(null,{cancelProduct})(VendorProductElement);

 
