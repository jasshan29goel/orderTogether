import React,{Fragment} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { dispatchProduct } from '../../actions/product';
const DispatchProductElement = (props) => {
    const {name,price,quantity,id,dispatchProduct}=props;

    const onClick = e => {
        e.preventDefault();
        dispatchProduct(id);
    };
    return (
        <Fragment>
            <div className='card mb-2'>
                <div className="card-header">
                    <h5>{name}
                    <button className="btn btn-secondary float-right" onClick={e => onClick(e)}>Dispatch</button>
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
DispatchProductElement.propTypes = {
    dispatchProduct: PropTypes.func.isRequired,
};
export default connect(null,{dispatchProduct})(DispatchProductElement);

 
