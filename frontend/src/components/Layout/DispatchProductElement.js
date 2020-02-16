import React,{Fragment} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { dispatchProduct ,cancelProduct} from '../../actions/product';
const DispatchProductElement = (props) => {
    const {name,price,quantity,id,dispatchProduct,cancelProduct}=props;

    const onClick = e => {
        e.preventDefault();
        dispatchProduct(id);
    };
    const onClick1 = e => {
        e.preventDefault();
        cancelProduct(id);
    };
    return (
        <Fragment>
            <div className='card mb-2'>
                <div className="card-header">
                    <h5>{name}
                    <button className="btn btn-secondary float-right" onClick={e => onClick(e)}>Dispatch</button>
                    <button className="btn btn-secondary float-right mr-2" onClick={e => onClick1(e)}>Cancel</button>
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
    cancelProduct: PropTypes.func.isRequired,
};
export default connect(null,{dispatchProduct,cancelProduct})(DispatchProductElement);

 
